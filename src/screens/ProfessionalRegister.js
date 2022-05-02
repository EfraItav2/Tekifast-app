import { Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Link, extendTheme, Fab } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign } from "@expo/vector-icons";

const Form = (props) => {
    return <Center w="100%" h="100%" bg="primary.50">
        <Box safeArea p="2" py="8" w="100%" bg="primary.50">
            <Heading mt={"-60px"} textAlign="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                I'm Professional
            </Heading>
            <Heading textAlign="center" mt="2" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Register
            </Heading>
            <VStack space={3} mt="5" bg="primary.50">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="example@email.com" borderColor={"black"}/>
                </FormControl>

                <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input placeholder="Enter your name" borderColor={"black"}/>
                </FormControl>

                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" placeholder="Enter your password" borderColor={"black"} />
                </FormControl>

                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password" placeholder="Enter your password" borderColor={"black"} />
                </FormControl>

                <Button mt="2" bg="primary.400" onPress={() => props.navigation.navigate('ProfessionalRegisterCategory')}>
                    Next
                </Button>
            </VStack>
        </Box>
    </Center>;
};
const ProfessionalRegister = ({navigation}) => {
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
            <Box position="relative" bg="primary.50">
                <Box position="relative" >
                    <Button mt={"30px"} mr={"3"} alignSelf="flex-end" variant="ghost" leftIcon={<Icon as={Fontisto} name="world-o" size="sm" />}>
                        ENG
                    </Button>
                </Box>
            </Box>
            <Form navigation = {navigation}/>
            <Fab mt={"20px"} onPress={()=>navigation.goBack()} renderInPortal={false} shadow={2} size="4" placement="top-left" icon={<Icon color="white" as={Ionicons} name="chevron-back" size="4" />} />
        </NativeBaseProvider>
    )
}

export default ProfessionalRegister;