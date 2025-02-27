import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../../Elements/InputBox';
import Button from '../../../Elements/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import styles from './styles';
import {validateForm} from '../../../utils/validateForm';
import TermsCheckbox from '../../../components/TermsCheckbox';
import SocialAuthButtons from '../../../components/SocialAuthButtons';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Spacer from '../../../Elements/Spacer';
import { useAuth } from '../../../hooks/useAuth';

type RegistrationProps = NativeStackScreenProps<
  RootStackParamList,
  'Registration'
>;

const RegistrationScreen = ({navigation}: RegistrationProps) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSelected, setIsSelected] = useState(false);

  const { user, loading, signInWithGoogle } = useAuth();

  const onGoogleSignPress = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
      console.log('Signed in user:', userData);
      navigation.navigate('HomeScreen');
      // You can now store user globally (e.g., Redux) or navigate
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
    setErrors(prev => ({...prev, [key]: ''}));
  };

  const handlePress = () => {
    const {isValid, errors} = validateForm(form, isSelected);
    setErrors(errors);
    if (isValid) navigation.navigate('Login');
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    setErrors({...errors, terms: ''}); // Clear error when user selects terms
  };

  const onAppleSignPress = () => {};


  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#f9f9ff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: 40}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Text style={styles.nameTitle}>Create an account</Text>

          <View style={styles.loginContainer}>
            <Text style={styles.nameSubTitle}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logInTitle}>Login</Text>
            </Pressable>
          </View>
          <Spacer height={66} />
          <InputBox
            placeholder="First Name"
            value={form.firstName}
            onChangeText={value => handleChange('firstName', value)}
            errorMessage={errors.firstName}
          />
          <Spacer height={10} />
          <InputBox
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={value => handleChange('lastName', value)}
            errorMessage={errors.lastName}
          />

          <Spacer height={10} />
          <InputBox
            placeholder="Email"
            value={form.email}
            onChangeText={value => handleChange('email', value)}
            errorMessage={errors.email}
          />
          <Spacer height={10} />
          <InputBox
            placeholder="Enter your password"
            value={form.password}
            isPassword={true} // Pass as password field
            onTogglePassword={() => setShowPassword(!showPassword)} // Toggle function
            secureTextEntry={!showPassword}
            onChangeText={value => handleChange('password', value)}
            errorMessage={errors.password}
          />

          <TermsCheckbox
            isSelected={isSelected}
            onToggle={toggleSelection}
            errorMessage={errors.terms}
          />
          <Spacer height={44} />
          <Button
            text="Create Account"
            onPress={handlePress}
            textColor="#FFFFFF"></Button>

          <Text style={styles.orText}>Or</Text>

          <SocialAuthButtons
            onGooglePress={() => onGoogleSignPress()}
            onApplePress={() => onAppleSignPress()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default RegistrationScreen;
