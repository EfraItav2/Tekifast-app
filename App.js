import * as React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSelectScreen from './src/screens/UserSelectScreen';
import ClientLogin from './src/screens/ClientLogin';
import ProfessionalLogin from './src/screens/ProfessionalLogin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="UserSelect" component={UserSelectScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ClientLogin" component={ClientLogin} options={{ headerShown: false }} />
          <Stack.Screen name="ProfessionalLogin" component={ProfessionalLogin} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;