import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import ErrorText from '../Elements/ErrorText';

interface TermsCheckboxProps {
  isSelected: boolean;
  onToggle: () => void;
  errorMessage?: string;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  isSelected,
  onToggle,
  errorMessage,
}) => {
  return (
    <>
      <Pressable onPress={onToggle} style={styles.container}>
        <View
          style={[styles.radioButton, isSelected && styles.radioButtonSelected]}
        />
        <Text style={styles.text}>
          I agree to the <Text style={styles.link}>Terms & Conditions</Text>
        </Text>
      </Pressable>
      {errorMessage ? <ErrorText message={errorMessage} /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 31,
  },
  radioButton: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  text: {
    color: '#787878',
    fontSize: 15,
  },
  link: {
    color: '#178CF7',
  },
});

export default TermsCheckbox;
