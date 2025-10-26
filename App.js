import { StyleSheet, View } from 'react-native';

import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import { black, green } from './components/MenuItems';
// import WelcomeScreen from './WelcomeScreen';
// import MenuItemsSectionList from './components/MenuItemsSectionList';
// import SectionListAssignAnswer from './components/SectionListAssignAnswer';
// import MenuItems from './components/SectionListAssign';
// import SectionListAssign from './components/SectionListAssign';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <SectionListAssign /> */}
        {/* <MenuItemsSectionList /> */}
        {/* <SectionListAssignAnswer /> */}
        {/* <MenuLists /> */}
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
