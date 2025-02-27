import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

 import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RegistrationScreen from './screens/Auth/Registration/RegistrationScreen'
import LoginScreen from './screens/Auth/Login/LoginScreen'
import HomeScreen from './Containers/Home/HomeScreen'
import { configureGoogleSignIn } from './api/authService'

export type RootStackParamList = {
  Home : undefined;
  Registration : undefined;
  Login : undefined;
  HomeScreen : undefined;
  Details : {product : Product}

}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Registration'
          screenOptions={{
            gestureEnabled: true,   // Enable swipe-back gesture
            gestureDirection: 'horizontal',  // Set swipe direction
          }}>

         <Stack.Screen 
            name='Registration'
            component={RegistrationScreen}
            options={{ headerShown: false }}>
         </Stack.Screen>

         <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}>
         </Stack.Screen>

          <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false }}>
         </Stack.Screen>
{/* <Stack.Screen name='Home'
          component={Home}
            options={{
            title:"Trending Products"
      }}></Stack.Screen>

         <Stack.Screen name='Details'
     component={Details}
      options={{
         title:"Product Details"
      }}></Stack.Screen> */}

      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App
