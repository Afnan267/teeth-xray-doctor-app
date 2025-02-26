import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from '../../Elements/InputBox';
import Button from '../../Elements/Button';
import SocialButton from '../../Elements/SocialButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';

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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: '',
  });

  const [isSelected, setIsSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({...form, [key]: value});
    setErrors({...errors, [key]: ''}); // Clear error when user types
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    setErrors({...errors, terms: ''}); // Clear error when user selects terms
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      terms: '',
    };

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = 'Enter a valid email.';
      valid = false;
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    if (!isSelected) {
      newErrors.terms = 'You must accept the Terms & Conditions.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePress = () => {
    if (validateForm()) {
      navigation.navigate('Login');
    }
  };

  const onGoogleSignPress = () => {
    signIn();
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '13145003481-1i678fbqv5k7qap7ipd09tjje5v1vql1.apps.googleusercontent.com',
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        // setUserInfo(response.data.user);
        console.log('User Info:', response.data.user);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameTitle}>Create an account</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.nameSubTitle}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInTitle}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.InputBoxFirst}>
        <InputBox
          placeholder="First Name"
          value={form.firstName}
          onChangeText={value => handleChange('firstName', value)}
        />
        {errors.firstName ? (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        ) : null}
      </View>
      <View style={styles.InputBox}>
        <InputBox
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={value => handleChange('lastName', value)}
        />
        {errors.lastName ? (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        ) : null}
      </View>
      <View style={styles.InputBox}>
        <InputBox
          placeholder="Email"
          value={form.email}
          onChangeText={value => handleChange('email', value)}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
      </View>
      <View style={styles.InputBox}>
        <InputBox
          placeholder="Enter your password"
          value={form.password}
          isPassword={true} // Pass as password field
          onTogglePassword={() => setShowPassword(!showPassword)} // Toggle function
          secureTextEntry={!showPassword}
          onChangeText={value => handleChange('password', value)}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
      </View>

      <TouchableOpacity onPress={toggleSelection} style={styles.radioContainer}>
        <View
          style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
        />
        <Text style={styles.termsAndConditions}>
          I agree to the{' '}
          <Text style={styles.logInTitle}>Terms & Condition</Text>
        </Text>
      </TouchableOpacity>
      {errors.terms ? (
        <Text style={styles.errorText}>{errors.terms}</Text>
      ) : null}

      <View style={styles.Button}>
        <Button
          text="Create Account"
          onPress={handlePress}
          textColor="#FFFFFF"></Button>
      </View>

      <Text style={styles.orText}>Or</Text>

      <View style={styles.SocialButton}>
        <SocialButton
          src="google"
          onPress={onGoogleSignPress}
          backgroundColor="#FFFFFF"></SocialButton>
        <View style={styles.horizontalSpace}></View>
        <SocialButton
          src="apple"
          onPress={handlePress}
          backgroundColor="#FFFFFF"></SocialButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginTop: 44,
  },
  SocialButton: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InputBoxFirst: {
    marginTop: 66,
  },
  InputBox: {
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 33,
    flex: 1,
    backgroundColor: '#f9f9ff',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Keeps both texts vertically aligned
  },
  nameTitle: {
    color: '#787878',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Poppins-Bold',
    marginBottom: 9,
    marginTop: 109,
  },
  nameSubTitle: {
    color: '#787878',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  logInTitle: {
    color: '#178CF7',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  termsAndConditions: {
    color: '#787878',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 31,
  },
  orText: {
    color: '#787878',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 11,
    textAlign: 'center',
    alignSelf: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 31,
  },
  radioButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  horizontalSpace: {
    width: 18,
  },
  errorText: {color: 'red', fontSize: 13, marginTop: 4},
});

export default RegistrationScreen;
