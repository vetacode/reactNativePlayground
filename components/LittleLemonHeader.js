import { StyleSheet, Text, View } from 'react-native';
import { yellow } from './MenuItems';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: yellow,
  },
  headerText: {
    marginTop: 50,
    padding: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
