import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import Home from './src/screens/Home';
import Town from './src/screens/Town';
import Park from './src/screens/Park';
import Cart from './src/screens/Cart';
import Grocery from './src/screens/Grocery';
import Kitchen from './src/screens/Kitchen';
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <>

      <StatusBar style = "auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Town" component={Town} />
        <Stack.Screen name="Park" component={Park} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Grocery" component={Grocery} />
        <Stack.Screen name="Kitchen" component={Kitchen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
