import { FlatList, StyleSheet, Text, View } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';
const salmon = '#EE9972';
const black = '#333333';
const white = '#EDEFEE';

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

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

export default function MenuItemsSectionList() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Menu Items</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(a) => a.id}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green,
  },

  innerContainer: {
    // backgroundColor: salmon,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 30,
    color: black,
    textAlign: 'center',
    // marginTop: 10,
    padding: 10,
    backgroundColor: salmon,
  },

  itemText: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: yellow,
  },
});

export { black, green, salmon, white, yellow };
