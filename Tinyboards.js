import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import BoardList from './BoardList'

const Tinyboards = () => (
<ScrollView style={styles.tinyboards} showsVerticalScrollIndicator={false}>
<BoardList item={item.board_list}/>
</ScrollView>
)

export default Tinyboards;

const styles = StyleSheet.create({
    
});