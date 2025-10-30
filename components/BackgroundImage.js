import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function BackgroundImage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/img/backgroundImage.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      >
        <Text style={styles.headerText}>Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    // width: 100,
    // height: 100,
    // borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
  },
});
