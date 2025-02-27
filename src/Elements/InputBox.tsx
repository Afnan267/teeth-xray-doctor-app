import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PasswordVisibilityOffIcon,
  PasswordVisibilityOnIcon,
} from '../Assets/Svg';
import ErrorText from './ErrorText';

interface InputBoxProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onTogglePassword?: () => void;
  isPassword?: boolean;
  errorMessage?: string; 
 }

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  onTogglePassword,
  isPassword = false,
  errorMessage,
 }) => {
  return (
    // <View style={styles.container}>
    //   <TextInput
    //     placeholder={placeholder}
    //     value={value}
    //     onChangeText={onChangeText}
    //     placeholderTextColor="#787878"
    //     style={styles.input}
    //     secureTextEntry={secureTextEntry}
    //   />
    //   {isPassword && (
    //     <TouchableOpacity onPress={onTogglePassword}>
    //       {secureTextEntry ? (
    //         <PasswordVisibilityOffIcon />
    //       ) : (
    //         <PasswordVisibilityOnIcon />
    //       )}
    //     </TouchableOpacity>
    //   )}
    // </View>

    <View style={styles.container}>
      <View style={[styles.inputContainer, errorMessage && styles.inputError]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#787878"
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
        {isPassword && (
          <TouchableOpacity onPress={onTogglePassword}>
            {secureTextEntry ? <PasswordVisibilityOffIcon /> : <PasswordVisibilityOnIcon />}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <ErrorText message={errorMessage} />}
    </View>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 19,
    backgroundColor: '#ffffff',
    borderRadius: 17,
  },

 container: {
    marginBottom: 12, // Add spacing for error message
  },
  
  inputError: {
    borderColor: 'red',
    borderWidth: 1, // Highlight border on error
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});

export default InputBox;
