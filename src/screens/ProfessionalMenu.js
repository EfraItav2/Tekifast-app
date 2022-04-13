import { Image, Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Link, extendTheme, Fab } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign } from "@expo/vector-icons";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const ProfessionalMenu = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Center>
                <Image mt="-40px" mb="-70px" size={"200"} resizeMode={"contain"} source={require("./img/TEKIFAST-Transparent-ch.png")} />
                <Heading>Requests</Heading>
            </Center>
        </NativeBaseProvider>
    )
}

export default ProfessionalMenu;