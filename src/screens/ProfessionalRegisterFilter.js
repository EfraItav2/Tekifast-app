import { Checkbox, Pressable, Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Link, extendTheme, Fab } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfessionalRegisterFilter = ({ navigation }) => {
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
            <Box bg="primary.50" height={"100%"}>
                <Box position="relative" bg="primary.50">
                    <Box position="relative" >
                        <Button mt={"30px"} mr={"3"} alignSelf="flex-end" variant="ghost" leftIcon={<Icon as={Fontisto} name="world-o" size="sm" />}>
                            ENG
                        </Button>
                    </Box>
                </Box>
                <Box alignItems={"center"} mt={"40px"} bg="primary.50">
                    <Heading textAlign={"center"}>Choose your filter</Heading>
                    <Checkbox.Group accessibilityLabel="choose numbers" mt={"20px"}>
                        <Checkbox value="one" my={2}>Home</Checkbox>
                        <Checkbox value="two" my={2}>Software Development</Checkbox>
                        <Checkbox value="three" my={2}>Clothes</Checkbox>
                    </Checkbox.Group>
                </Box>
                <Box alignItems={"center"} mt={"20px"}>
                    <Button mt="2" width={"80%"} bg="primary.400" onPress={() => navigation.navigate('ProfessionalRegisterCompany')}>
                        Next
                    </Button>
                </Box>
            </Box>
            <Fab mt={"20px"} onPress={() => navigation.goBack()} renderInPortal={false} shadow={2} size="4" placement="top-left" icon={<Icon color="white" as={Ionicons} name="chevron-back" size="4" />} />
        </NativeBaseProvider>
    )
}

export default ProfessionalRegisterFilter;