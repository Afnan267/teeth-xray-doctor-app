import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';

interface AiViewerRadioButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const AfnanAiViewerRadioButton: React.FC<AiViewerRadioButtonProps> = ({
  style,
  onPress,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleToggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleToggleSwitch}
      style={[styles.AiViewerRadioButtonStyle, style]}>
      <Text>Ai Viewer</Text>
      <Switch
        trackColor={{false: '#767577', true: '#178CF7'}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggleSwitch}
        value={isEnabled}
        style={styles.SwitchStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  AiViewerRadioButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#F9F9FF',
    borderRadius: 30,
  },
  SwitchStyle: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
});

export default AfnanAiViewerRadioButton;
