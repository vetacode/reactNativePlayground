import { SectionList, StyleSheet, Text, View } from 'react-native';
import { black, green, salmon, white, yellow } from './MenuItems';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

export default function MenuItemsSectionList() {
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Menu Items</Text>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
      ></SectionList>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: black,
  },

  headerText: {
    fontSize: 36,
    color: white,
    padding: 5,
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export { black, green, salmon, white, yellow };
