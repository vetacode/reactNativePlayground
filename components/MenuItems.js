import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';
const salmon = '#EE9972';
const black = '#333333';
const white = '#EDEFEE';

export default function MenuItems () {
<View style={menuStyles.container}> 
     <Text style={menuStyles.headerText}>Menu Items</Text>
    <FlatList style={menuStyles.innerContainer}>
       
    </FlatList>
</View>


}



const menuStyles = StyleSheet.create({
    container: {
        flex: 0.8,
        // backgroundColor: green,
    },

    innerContainer: {
        backgroundColor: salmon,
    },
    headerText: {
        fontSize: 30,
        flexWrap: 'wrap',
        color: yellow,
        
    }
}) 