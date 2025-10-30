import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const ExploringPropsImage = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/logo.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/img/image1.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/image2.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/image3.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('../assets/img/image4.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 'auto',
  },

  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 5,
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

export default ExploringPropsImage;
