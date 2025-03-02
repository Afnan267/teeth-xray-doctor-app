import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import RegistrationScreen from "../screens/Auth/Registration/RegistrationScreen";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword/ForgotPasswordScreen";
import HomeScreen from "../Containers/Home/HomeScreen";
import { RootStackParamList } from "../types/navigation";

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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}></Stack.Screen>
  
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  export default AppNavigator;
