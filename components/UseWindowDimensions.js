import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

export default function UseWindowDimensions() {
  const window = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/logoLong.png')}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {window.height}</Text>
      <Text style={styles.regular}>Width: {window.width}</Text>
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 'auto',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
