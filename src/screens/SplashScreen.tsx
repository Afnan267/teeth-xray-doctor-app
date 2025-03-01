import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useAuth} from '../contexts/AuthContext';

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
      user ? navigation.navigate('HomeScreen') : navigation.navigate('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [user, initializing, fallbackTimeoutReached]);

  return (
    <View style={styles.container}>
      <Text style={styles.splashTitle}>SplashScreen</Text>
      <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
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
