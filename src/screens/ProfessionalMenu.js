import { Image, Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Spacer, extendTheme, Badge, Avatar, Flex, Pressable } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign } from "@expo/vector-icons";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const ProfessionalMenu = ({ navigation }) => {
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
            <Center>
                <Image mt="-50px" mb="-70px" size={"200"} resizeMode={"contain"} source={require("./img/TEKIFAST-Transparent-ch.png")} />
                <Heading color={"primary.500"}>R<Heading>equests</Heading></Heading>
            </Center>
            <Box alignItems="center" mt="5px">
                <Pressable onPress={() => console.log("I'm Pressed")}>
                    <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5" rounded="8">
                        <HStack alignItems="center">
                            <Badge colorScheme="primary.700" _text={{
                                color: "white"
                            }} variant="solid" rounded="4">
                                New!
                            </Badge>
                            <Spacer />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="md">
                            Soporte Técnico
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
            </Box>
        </NativeBaseProvider>
    )
}

export default ProfessionalMenu;