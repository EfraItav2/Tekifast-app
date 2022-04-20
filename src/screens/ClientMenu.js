import { Text, Container, NativeBaseProvider, Box, Heading, HStack, Center, Spacer, extendTheme, Badge, Avatar, Flex, Pressable } from 'native-base';
import { Fab, Icon} from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import ClientProfile from './ClientProfile';
import ClientSearch from './ClientSearch';
import ClientRecord from './ClientRecord';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    return (
    <> 
        <Center>
        <Heading mt="10px" color={"primary.500"}>W<Heading mt="10px" >hat do you need?</Heading></Heading>
        <Box height="100" w="400" shadow="2" rounded="lg" _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />} label="see more" />
        </Box>
      </Center>

      <Center>
        <Box height="100" w="400" shadow="2" rounded="lg" _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />} label="see more" />
        </Box>
      </Center>

      <Center>
        <Box height="100" w="400" shadow="2" rounded="lg" _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />} label="see more" />
        </Box>
      </Center>

      <Center>
        <Box height="100" w="400" shadow="2" rounded="lg" _dark={{
        bg: "coolGray.200:alpha.20"
      }} _light={{
        bg: "coolGray.200:alpha.20"
      }}>
          <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />} label="see more" />
        </Box>
      </Center>
      </>
      
    )
     
  };
  

const ClientMenu = ({ navigation }) => {
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
            <Tab.Navigator barStyle={{ backgroundColor: '#bbf2d3' }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ClientRecord"
                    component={ClientRecord}
                    options={{
                        tabBarLabel: 'Record',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                    }}
                />
                
                <Tab.Screen
                    name="ClientSearch"
                    component={ClientSearch}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="search1" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ClientProfile"
                    component={ClientProfile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NativeBaseProvider>
    )
}

export default ClientMenu;