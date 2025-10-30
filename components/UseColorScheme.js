import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import { yellow } from './MenuItems';

export default function UseColorScheme() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}
    >
      <Image
        style={styles.logo}
        source={require('../assets/img/logoLong.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 'auto',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  regular: {
    fontSize: 18,
    textAlign: 'center',
    color: yellow,
  },
});
