import {StyleProp, StyleSheet, Switch, Text, View, ViewStyle} from 'react-native';
import React, { useState } from 'react';

interface AiViewerRadioButtonProps {
  style?: StyleProp<ViewStyle>; // ✅ Correct typing for style
}

const AiViewerRadioButton: React.FC<AiViewerRadioButtonProps> = ({style}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.AiViewerRadioButtonStyle, style]}>
      <Text>Ai Viewer</Text>
       <Switch
        trackColor={{ false: '#767577', true: '#178CF7' }}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style = {styles.SwitchStyle}
      />
    </View>
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
  SwitchStyle:{
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  }
});

export default AiViewerRadioButton;
