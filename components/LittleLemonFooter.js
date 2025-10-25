import { StyleSheet, Text, View } from 'react-native';
import { yellow } from './MenuItems';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, {new Date().getFullYear()}{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: yellow,
    marginBottom: 0,
    padding: 10,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
