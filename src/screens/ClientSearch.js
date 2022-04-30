import React from "react";
import { Container, Text, Heading, Center, NativeBaseProvider, Input } from "native-base";
import { Feather } from '@expo/vector-icons'; 

const SearchClient = () => {
  return <Stack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={Fontisto} size={5} 
    ml="2" color="muted.400" />} placeholder="Name" />
    </Stack>;
};
export default SearchClient;