import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../../Elements/InputBox';
import Button from '../../../Elements/Button';
import Spacer from '../../../Elements/Spacer';
import RayText from '../../../Elements/RayText';
import {BackArrowIcon} from '../../../Assets/Svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {validateEmail} from '../../../utils/validateEmail';
import {useForgotPassword} from '../../../hooks/useEmailAuth/useForgotPassword';
import { RootStackParamList } from '../../../types/navigation';
import styles from './styles';

type ForgotPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPasswordScreen = ({navigation}: ForgotPasswordProps) => {
  const [form, setForm] = useState({email: ''});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {sendPasswordResetEmail, loading, error} = useForgotPassword();

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
    setErrors(prev => ({...prev, [key]: ''})); // Clear the error when user types
  };

  const resetPassword = async () => {
    const {isValid, errors} = validateEmail(form);
    setErrors(errors);
    if (isValid) {
      const success = await sendPasswordResetEmail(form.email);

      if (!success) {
        Alert.alert(
          'Password Rest Failed',
          error ?? 'An unknown error occurred',
          [{text: 'OK'}],
        );
        return;
      }
      Alert.alert(
        'Reset passwork link has sent to your mail',
        error ?? 'An unknown error occurred',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}], // Clears stack
              });
            },
          },
        ],
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <Modal transparent visible={loading}>
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
      <View style={styles.container}>
        <Text style={styles.title}>Forgot password ?</Text>
        <Spacer height={10} />
        <Text style={styles.subTitle}>
          No worries .we’ll send you reset instructions.
        </Text>
        <Spacer height={66} />
        <InputBox
          placeholder="Email"
          value={form.email}
          onChangeText={value => handleChange('email', value)}
          errorMessage={errors.email}
        />
        <Spacer height={28} />
        <Button
          text="Reset Password"
          onPress={resetPassword}
          textColor="#FFFFFF"></Button>
        <Spacer height={30} />
        <Pressable
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <RayText text="Back to login" leftIcon={<BackArrowIcon />} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;