import { SectionList, StyleSheet, Text, View } from 'react-native';
import { black, white } from './MenuItems';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Tahu Isi', price: 'Rp 10.000' },
      { name: 'Tempe Mendoan', price: 'Rp 12.000' },
      { name: 'Pisang Goreng', price: 'Rp 8.000' },
      { name: 'Bakwan Jagung', price: 'Rp 10.000' },
      { name: 'Martabak Mini', price: 'Rp 15.000' },
      { name: 'Sate Telur Puyuh', price: 'Rp 12.000' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Nasi Goreng Spesial', price: 'Rp 25.000' },
      { name: 'Mie Goreng Jawa', price: 'Rp 22.000' },
      { name: 'Sate Ayam Madura', price: 'Rp 30.000' },
      { name: 'Rendang Padang', price: 'Rp 40.000' },
      { name: 'Ayam Penyet', price: 'Rp 28.000' },
      { name: 'Soto Betawi', price: 'Rp 32.000' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Kerupuk Udang', price: 'Rp 5.000' },
      { name: 'Sambal Terasi', price: 'Rp 5.000' },
      { name: 'Telur Dadar', price: 'Rp 7.000' },
      { name: 'Tahu Tempe Goreng', price: 'Rp 10.000' },
      { name: 'Sayur Asem', price: 'Rp 8.000' },
      { name: 'Perkedel Kentang', price: 'Rp 6.000' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Es Cendol', price: 'Rp 12.000' },
      { name: 'Es Teler', price: 'Rp 15.000' },
      { name: 'Klepon', price: 'Rp 8.000' },
      { name: 'Pisang Bakar Cokelat Keju', price: 'Rp 18.000' },
      { name: 'Dadar Gulung', price: 'Rp 10.000' },
      { name: 'Kolak Pisang', price: 'Rp 12.000' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

export default function MenuItemsSectionList() {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
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
        ItemSeparatorComponent={Separator}
        // ListFooterComponent={Footer}
      ></SectionList>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: black,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  headerText: {
    fontSize: 36,
    color: white,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 25,
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingVertical: 5,
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
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
