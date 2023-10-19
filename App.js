import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';


const Stack = createNativeStackNavigator()
// Tailwind css in react native
// https://medium.com/@simpleandshort/how-to-use-nativewind-tailwindcss-in-your-react-native-application-67874f41e13f 
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreens}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


