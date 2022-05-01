import React from "react";
import { Text, View, Image, FlatList} from 'native-base';
import JobsListItem from "./BusinessScreenClient";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const JobsList = [
    {
        id: 1,
        name:'Josue',
        description: 'Delivery man',
        cover: 'https://picsum.photos/200',
    },
    {
        id: 2,
        name:'Pedro',
        description: 'Que gusto de verte',
        cover: 'https://picsum.photos/200',
    },
];

export default function Job({navigation}){
    return(
        <View>
            <FlatList
                data={JobsList}
                renderItem={({item}) =><JobsListItem Job={item}/>}
                keyExtractor={item => item.id}
           />
        </View>
    );
}
