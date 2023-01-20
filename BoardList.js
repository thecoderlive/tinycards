import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const boardListItem = ({ item }) => (
<View style={styles.board_list_item}>
<Image
    style={styles.logo}
    source={{uri: item.logo}}
    />
<Text style={styles.about_card}>{item.about_card}</Text>
</View>
  );

const BoardList = ({ item }) => (
<FlatList
    style={styles.board_list}
    data={item}
    renderItem={boardListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default BoardList;

const styles = StyleSheet.create({
    'logo': {
        'width': '18vw',
        'height': '18vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 10
    },
    'about_card': {
        'fontSize': 14,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginBottom': 15,
        'color': '#666060'
    }
});