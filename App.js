import { StyleSheet, View } from 'react-native';

import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import { black, green } from './components/MenuItems';
// import WelcomeScreen from './WelcomeScreen';
// import MenuItems from './components/MenuItems';
import MenuItems from './components/MenuItemsSectionList';
// import MenuItems from './components/SectionListAssign';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItemsSectionList /> */}
        {/* <MenuLists /> */}
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green,
  },
  footerContainer: { backgroundColor: black },
});
