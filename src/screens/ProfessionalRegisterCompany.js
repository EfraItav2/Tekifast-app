import { Checkbox, Pressable, Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Link, extendTheme, Fab } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Form = (props) => {
    return <Center w="100%" h="100%" bg="primary.50">
        <Box safeArea p="2" py="8" w="100%" bg="primary.50">
            <VStack space={3} bg="primary.50">

                <FormControl>
                    <FormControl.Label>Name company</FormControl.Label>
                    <Input placeholder="ExampleCorporation" borderColor={"black"} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Company ZIP</FormControl.Label>
                    <Input placeholder="ZIP" borderColor={"black"} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Company phone</FormControl.Label>
                    <Input placeholder="Phone number" borderColor={"black"} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>RFC</FormControl.Label>
                    <Input placeholder="RFC" borderColor={"black"} />
                </FormControl>

                <Pressable mt={"10px"}>
                    <Box>
                        <HStack>
                            <Icon as={MaterialCommunityIcons} name="google-maps" size={"sm"} />
                            <Text ml={"5px"} fontSize={"md"} bold={"bold"}>Company location</Text>
                        </HStack>
                    </Box>
                </Pressable>

                <Button mt="2" bg="primary.400" onPress={() => props.navigation.navigate('ProfessionalMenu')}>
                    Next
                </Button>
            </VStack>
        </Box>
    </Center>;
};
const ProfessionalRegisterCompany = ({ navigation }) => {
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
                    <Heading textAlign={"center"}>Company information</Heading>
                    <Form navigation={navigation} />
                </Box>
            </Box>
            <Fab mt={"20px"} onPress={() => navigation.goBack()} renderInPortal={false} shadow={2} size="4" placement="top-left" icon={<Icon color="white" as={Ionicons} name="chevron-back" size="4" />} />
        </NativeBaseProvider>
    )
}

export default ProfessionalRegisterCompany;