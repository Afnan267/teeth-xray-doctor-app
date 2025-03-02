import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {configureGoogleSignIn} from './api/authService';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider, useAuth} from './contexts/AuthContext';
import AppNavigator from './navigation/AppNavigator';

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
