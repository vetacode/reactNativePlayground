import { StyleSheet, View } from 'react-native';

import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import { black, green } from './components/MenuItems';
import WelcomeScreen from './WelcomeScreen';
// import MenuItemsSectionList from './components/MenuItemsSectionList';
// import SectionListAssign from './components/SectionListAssign';ß
// import SectionListAssignAnswer from './components/SectionListAssignAnswer';
// import MenuItems from './components/SectionListAssign';
// import LatihanSectionList from './components/LatihanSectionList';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
        {/* <SectionListAssign /> */}
        {/* <SectionListAssignAnswer /> */}
        {/* <MenuItemsSectionList /> */}
        {/* <LatihanSectionList /> */}
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
