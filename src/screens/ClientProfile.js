import { Fab, Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Spacer, extendTheme, Badge, Avatar, Flex, Pressable } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const ClientProfile = ({ navigation }) => {
    const theme = extendTheme({
        colors: {
            primary: {
                50: '#e0fded',
                100: '#bbf2d3',
                200: '#93e9b7',
                300: '#6adf9b',
                400: '#42d680',
                500: '#29bd66',
                600: '#1d934f',
                700: '#116938',
                800: '#054020',
                900: '#001705'
            }
        }
    })
    return (
        <NativeBaseProvider theme={theme}>
            <Box position="relative" mt={"30px"}>
                <Pressable alignSelf="flex-end" mt={"10px"} mr={"10px"} onPress={() => navigation.navigate("UserSelect")}>
                    <MaterialCommunityIcons name="circle-edit-outline" size={27} color="black" />
                </Pressable>
            </Box>
            <Box mt="15px" alignItems={"center"}>
                <HStack space={2}>
                    <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
                        uri: "https://imagenes.elpais.com/resizer/pK0Or4c41-yQsPSgkLgah604U24=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PQK2TSGWNVFWZE263CAATCRU5Y.webp"
                    }}>
                        RB
                    </Avatar>

                </HStack>
                <Heading mt="15px" textAlign={"center"}>Nathalie Areli Albertana</Heading>
            </Box>
            <Box mt="10px" ml="10px">
                <HStack space={2} mt={"2px"}>
                    <MaterialCommunityIcons name="email" size={24} color="black" />
                    <Text color="black" fontSize="md">
                        CorreoEjem@gmail.com
                    </Text>
                </HStack>
                <Box alignItems="center" mt="15px">
                    <Button onPress={()=>navigation.navigate("UserSelect")} colorScheme={"error"} width={"50%"} variant="subtle" leftIcon={<Icon as={MaterialCommunityIcons} name="logout" size="sm" />}>
                        Logout
                    </Button>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}

export default ClientProfile;