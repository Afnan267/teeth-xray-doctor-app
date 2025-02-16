import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import DropDownDisplayTitle from './DropDownDisplayTitle';
import AiViewerLevel from './AiViewerLevel';
import CustomSlider from './CustomSlider';

type AiViewerDetailProps = {
  style?: StyleProp<ViewStyle>;
};

const AiViewerDetail: React.FC<AiViewerDetailProps> = ({style}) => {
  return (
    <View style={style}>
      <View style={styles.aiViewerTitleView}>
        <DropDownDisplayTitle
          title="Ai Viewer"
          textStyle={styles.aiViewerTitleStyle}
        />
        <View pointerEvents="none">
          <Switch
            trackColor={{false: '#767577', true: '#178CF7'}}
            thumbColor={'#fff'}
            ios_backgroundColor="#3e3e3e"
            value={true} // Always set to true
            style={styles.SwitchStyle}
          />
        </View>
      </View>
      <View style={styles.aiViewerTypeContainer}>
        <AiViewerLevel
          title="Low"
          value="30 detections"
          textStyle={{textAlign: 'left'}}
        />
        <AiViewerLevel
          title="Medium"
          value="22"
          textStyle={{textAlign: 'center'}}
        />
        <AiViewerLevel
          title="High"
          value="18"
          textStyle={{textAlign: 'right'}}
        />
      </View>

      {/* <Slider
        style={styles.sliderContainer}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#178CF7"
        maximumTrackTintColor="#D9D9D9"
      /> */}

      <CustomSlider/>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    height: 20,
    marginHorizontal: 16,
   },
  aiViewerTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aiViewerTypeContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
     marginTop: 16,
  },
  aiViewerTitleStyle: {
    fontSize: 14,
    color: '#000',
    padding: 4,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  SwitchStyle: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    marginTop: 16,
    marginEnd: 16,
  },
});

export default AiViewerDetail;
