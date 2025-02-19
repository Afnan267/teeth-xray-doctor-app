import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {images} from '../Assets/Images';
import {
  AIChatbotIcon,
  BrightnessIcon,
  ContrastIcon,
  DentistryIcon,
  EditIcon,
  FullScreenIcon,
  RotateIcon,
  ZoomInIcon,
} from '../Assets/Svg';

type HomeBottomContainerProps = {
  style?: StyleProp<ViewStyle>;
  onBottomIconClick: (selectedIcon: string) => void;
};

const HomeBottomContainer: React.FC<HomeBottomContainerProps> = ({
  style,
  onBottomIconClick,
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const handleIconPress = (iconName: string) => {
    setSelectedIcon(iconName === selectedIcon ? null : iconName);
    onBottomIconClick(iconName);
  };

  return (
    <View style={[style, styles.container]}>
      <Image
        source={images['teethImage']}
        style={{height: '50%', width: '100%', justifyContent: 'flex-end'}}
      />
      <View style={styles.bottomContainer}>
        <AIChatbotIcon />

        <View style={styles.bottomOperationsContainer}>
          {[
            {name: 'rotate', Component: RotateIcon},
            {name: 'fullscreen', Component: FullScreenIcon},
            {name: 'zoom', Component: ZoomInIcon},
            {name: 'brightness', Component: BrightnessIcon},
            {name: 'edit', Component: EditIcon},
            {name: 'dentistry', Component: DentistryIcon},
            {name: 'contrast', Component: ContrastIcon},
          ].map(({name, Component}) => {
            const isSelected = selectedIcon === name;
            return (
              <TouchableOpacity
                key={name}
                style={[
                  styles.iconContainer,
                  isSelected && styles.selectedIcon,
                ]}
                onPress={() => handleIconPress(name)}>
                <Component color={isSelected ? '#FFFFFF' : '#787878'} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HomeBottomContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  chatbotContainer: {
    position: 'absolute',
    bottom: 23, // Adjust based on your preference
    left: 16,
  },
  bottomContainer: {
    // marginTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 23, // Adjust based on your preference
    // left: 16,
  },
  bottomOperationsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 17,
    flex: 1,
    marginStart: 11,
    // marginEnd: 15,
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 50, // Ensures a circular background
  },
  selectedIcon: {
    backgroundColor: '#178CF7', // Light blue background for selection
  },
});
