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

interface InputBoxProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  onTogglePassword?: () => void;
  isPassword?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  onTogglePassword,
  isPassword = false,
}) => {
  return (
    <View style={styles.container}>
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
          {secureTextEntry ? (
            <PasswordVisibilityOffIcon />
          ) : (
            <PasswordVisibilityOnIcon />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 19,
    backgroundColor: '#ffffff',
    borderRadius: 17,
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
