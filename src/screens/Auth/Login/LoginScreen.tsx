import {
  ActivityIndicator,
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../../Elements/InputBox';
import Button from '../../../Elements/Button';
import SocialButton from '../../../Elements/SocialButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import {validateLoginForm} from '../../../utils/validateLoginForm';
import {useLoginWithEmail} from '../../../hooks/useEmailAuth/useLoginWithEmail';
import {ScrollView} from 'react-native-gesture-handler';
import {useGoogleLogin} from '../../../hooks/useGoogleLogin';
import SocialAuthButtons from '../../../components/SocialAuthButtons';
import { RootStackParamList } from '../../../types/navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const [form, setForm] = useState({email: '', password: ''});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSelected, setIsSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {loginWithEmail, loadingLoginWithEmail, error} = useLoginWithEmail();
  const {user, loading, signInWithGoogle} = useGoogleLogin();

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
    setErrors(prev => ({...prev, [key]: ''})); // Clear the error when user types
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const handleLogin = async () => {
    const {isValid, errors} = validateLoginForm(form);
    setErrors(errors);

    if (isValid) {
      const success = await loginWithEmail(form.email, form.password);
      if (!success) {
        Alert.alert('Login Failed', error ?? 'An unknown error occurred', [
          {text: 'OK'},
        ]);
        return;
      }

      navigation.navigate('HomeScreen');
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit App', 'Do you want to exit?', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Exit', onPress: () => BackHandler.exitApp()},
      ]);
      return true; // Prevent default back action
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Cleanup
  }, []);

  const onGoogleSignPress = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
      console.log('Signed in user:', userData);
      navigation.navigate('HomeScreen');
    }
  };
  const onAppleSignPress = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Modal transparent visible={loadingLoginWithEmail}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Modal>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.nameTitle}>Welcome Back</Text>

        <Text style={styles.nameSubTitle}>
          Please enter your details to sign in
        </Text>

        <View style={styles.InputBoxFirst}>
          <InputBox
            placeholder="Email"
            value={form.email}
            onChangeText={value => handleChange('email', value)}
            errorMessage={errors.email}
          />
        </View>
        <View style={styles.InputBox}>
          <InputBox
            placeholder="Enter your password"
            value={form.password}
            onChangeText={value => handleChange('password', value)}
            isPassword={true} // Pass as password field
            onTogglePassword={() => setShowPassword(!showPassword)} // Toggle function
            secureTextEntry={!showPassword}
            errorMessage={errors.password}
          />
        </View>

        <View style={styles.RememberMeText}>
          <TouchableOpacity
            onPress={toggleSelection}
            style={styles.radioContainer}>
            <View
              style={[
                styles.radioButton,
                isSelected && styles.radioButtonSelected,
              ]}
            />
            <Text style={styles.termsAndConditions}>Remember me</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.popTo('ForgotPassword')}>
            <Text style={styles.logInTitle}>Forget password</Text>
          </Pressable>
        </View>

        <View style={styles.Button}>
          <Button
            text="Sign in"
            onPress={handleLogin}
            textColor="#FFFFFF"></Button>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.nameSubTitle}>Already have an account? </Text>
          <Pressable onPress={() => navigation.popTo('Registration')}>
            <Text style={styles.signupTitle}>Sign up</Text>
          </Pressable>
        </View>

        <SocialAuthButtons
          onGooglePress={() => onGoogleSignPress()}
          onApplePress={() => onAppleSignPress()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
