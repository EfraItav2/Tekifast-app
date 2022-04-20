import { Icon, Text, NativeBaseProvider, Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Link, extendTheme, Fab } from 'native-base';
import React from 'react';
import { Fontisto, Ionicons, AntDesign,FontAwesome5 } from "@expo/vector-icons";


const Form = (props) => {
    return <Center w="100%" h="100%" bg="primary.50">
        <Box safeArea p="2" py="8" w="100%" bg="primary.50">
            <Heading textAlign="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Choose your payment method
            </Heading>

            <VStack space={3} mt="5" bg="primary.50">
                <Button mt="2" bg="primary.400" leftIcon={<Icon as={Fontisto} name="paypal" size="sm" />} onPress={() => props.navigation.navigate('')}>
                PayPal
                </Button>
                <Button mt="1" bg="primary.800" leftIcon={<Icon as={FontAwesome5} name="money-bill-wave" size="sm" />} onPress={() => props.navigation.navigate('ClientMenu')}>
                 Cash
                </Button>
            </VStack>
        </Box>
    </Center>;
};
const ClientPay = ({navigation}) => {
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

export default ClientPay;