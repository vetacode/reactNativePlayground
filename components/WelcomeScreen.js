import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode='on-drag'
      >
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={'First Name'}
        />
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={'Last Name'}
        />
        <TextInput
          style={styles.inputBoxMessage}
          multiline={true}
          value={message}
          onChangeText={onChangeMessage}
          placeholder={'Input Your Message'}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  inputBoxMessage: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'black',
    backgroundColor: '#EDEFEE',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});
