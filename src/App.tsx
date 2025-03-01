import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RegistrationScreen from './screens/Auth/Registration/RegistrationScreen';
import LoginScreen from './screens/Auth/Login/LoginScreen';
import HomeScreen from './Containers/Home/HomeScreen';
import {configureGoogleSignIn} from './api/authService';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider, useAuth} from './contexts/AuthContext';
import SplashScreen from './screens/SplashScreen';

export type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  Login: undefined;
  HomeScreen: undefined;
  Details: {product: Product};
  SplashScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        gestureEnabled: true, // Enable swipe-back gesture
        gestureDirection: 'horizontal', // Set swipe direction
      }}>
      
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default App;
