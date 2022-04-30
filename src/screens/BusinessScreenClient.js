import React from "react";
import { Text, View, Image, FlatLis} from 'native-base';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    image:{
        width: 50,
        height:50,
        marginRight: 10,
    },
})

export default function JobsListItem({Job}){
    return(
        <view style={styles.container}>
            <Image source = {{uri: Job.cover}} style={styles.image} />
            <text>{Job.name}</text>
            <text>{Job.description}</text>
        </view>
    );
}