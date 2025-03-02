import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuth} from '../contexts/AuthContext';
import {RootStackParamList} from '../types/navigation';
import {images} from '../Assets/Images';

type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = ({navigation}: SplashScreenProps) => {
  const {user, initializing} = useAuth();
  const [fallbackTimeoutReached, setFallbackTimeoutReached] = useState(false);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setFallbackTimeoutReached(true);
    }, 4000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (initializing && !fallbackTimeoutReached) return;
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: user ? 'HomeScreen' : 'Login'}], // Clears stack
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [user, initializing, fallbackTimeoutReached]);

  return (
    <ImageBackground source={images['splashBg']} style={styles.background}>
      <Image source={images['splashIcon']} style={{height: 38, width: 204}} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    width: '100%', // Ensures it covers full width
    height: '100%', // Ensures it covers full height
    resizeMode: 'cover', // Keeps aspect ratio and fills screen
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: 'white',
  },
  loader: {
    position: 'absolute',
    bottom: 60, // Adjust as needed
  },
  splashTitle: {
    color: '#787878',
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
