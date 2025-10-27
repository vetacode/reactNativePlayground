import { Image, StyleSheet, Text, View } from 'react-native';

const ExploringImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
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

export default ExploringImage;
