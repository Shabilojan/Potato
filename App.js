import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Menu from './screens/Menu';
import Home from './screens/Home';
import Tips from './screens/Tips';
import Tamil from './screens/Tamil';
import Sinhala from './screens/Sinhala';
import English from './screens/English';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="Tips" component={Tips}  options={{ headerShown: false }} />
        <Stack.Screen name="Tamil" component={Tamil}  options={{ headerShown: false }} />
        <Stack.Screen name="Sinhala" component={Sinhala}  options={{ headerShown: false }} />
        <Stack.Screen name="English" component={English}  options={{ headerShown: false }} />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
