import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../Elements/InputBox';
import Button from '../../Elements/Button';
import SocialButton from '../../Elements/SocialButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type LoginProps = NativeStackScreenProps<RootStackParamList,"Login">


const LoginScreen = ({navigation} : LoginProps) => {

  const [text, setText] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (key : keyof typeof form, value : string) => {
    setForm({ ...form, [key]: value });
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const handlePress = () => {
   navigation.navigate('HomeScreen')
  };

  return (
    <View style = {styles.container}>
      
      <Text style = {styles.nameTitle}>Welcome Back</Text>
      
      <Text style = {styles.nameSubTitle}>Please enter your details to sign in</Text>

      <View style = {styles.InputBoxFirst}>
        <InputBox
          placeholder='Email'
          value={form.email}
          onChangeText={value => handleChange('email', value)}
        />
      </View>
      <View style = {styles.InputBox}>
        <InputBox
          placeholder='Enter your password'
          value={form.password}
          onChangeText={value => handleChange('password', value)}
        />
      </View>

      <View style = {styles.RememberMeText}>
      
      <TouchableOpacity onPress={toggleSelection} style={styles.radioContainer}>
      <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]} />
        <Text style = {styles.termsAndConditions}>Remember me</Text>
      </TouchableOpacity>

      <Text style = {styles.logInTitle}>Forget password</Text>

      </View>

      <View style = {styles.Button}>
        <Button
          text='Sign in'
          onPress={handlePress} 
          textColor="#FFFFFF" >
        </Button>
      </View>
     
         <View style={styles.signupContainer}>
              <Text style={styles.nameSubTitle}>Already have an account? </Text>
              <Pressable onPress={() => navigation.popTo('Registration')}>
                <Text style={styles.signupTitle}>Sign up</Text>
              </Pressable>
            </View>


      <View style = {styles.SocialButton}>
        <SocialButton
          src='google'
          onPress={handlePress} 
          backgroundColor="#FFFFFF" >
        </SocialButton>
        <View style = {styles.horizontalSpace}></View>
        <SocialButton
          src='apple'
          onPress={handlePress} 
          backgroundColor="#FFFFFF" >
        </SocialButton>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  signupContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',  // Keeps both texts vertically aligned
    alignSelf: 'center', 
  },
  Button: {
    marginTop:44,
  },
  RememberMeText: {
    marginTop:35,
    flexDirection: 'row',       // Arrange items horizontally
    justifyContent: 'space-between', // Add space between buttons
  },
  SocialButton: {
    marginTop:30,
    flexDirection: 'row',       // Arrange items horizontally
    justifyContent: 'space-between', // Add space between buttons
  },
  InputBoxFirst: {
    marginTop:66,
    },
  InputBox: {
      marginTop:10,
    },
  container: {
        paddingHorizontal: 33,
        flex: 1,
        backgroundColor: '#f9f9ff',
    },
    nameTitle: {
        color: '#787878',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: '500',
        fontFamily: 'Poppins-Bold',
        marginBottom: 9,
        marginTop:109
      },
    nameSubTitle: {
        color: '#787878',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular'
      },
    logInTitle: {
        color: '#178CF7',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular'
      },
      signupTitle: {
        color: '#787878',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Poppins-Bold'
      },
      termsAndConditions: {
        color: '#787878',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        // marginTop: 31
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
        // marginTop: 31
      },
      radioButtonSelected: {
        backgroundColor: '#007BFF',
        borderColor: '#007BFF',
      },
      horizontalSpace: {
        width: 18
      },
  });


export default LoginScreen
