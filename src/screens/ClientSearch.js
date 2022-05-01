import React from "react";
import { Container, Text, Heading, Center, NativeBaseProvider, Input,Stack } from "native-base";
import { Feather } from '@expo/vector-icons'; 

const SearchClient = () => {
  return <Stack space={4} w="750%" maxW="350px" alignItems="center" marginTop={8} >
      <Input variant="outline" size="lg" placeholder="Search" />
    </Stack>;
};
export default SearchClient;