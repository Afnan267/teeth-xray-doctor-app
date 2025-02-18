import {
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import DropDownDisplayTitle from './DropDownDisplayTitle';
import AiViewerLevel from './AiViewerLevel';
import CustomSlider from './CustomSlider';
import MyCustomSlider from './MyCustomSlider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type AiViewerDetailProps = {
  style?: StyleProp<ViewStyle>;
};

const AiViewerDetail: React.FC<AiViewerDetailProps> = ({style}) => {
  const [value, setValue] = useState(50);
  const [sliderValue, setSliderValue] = useState<number>(0);

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

      {/* <CustomSlider/> */}

      {/* <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Selected Value: {value}</Text>
        <MyCustomSlider min={0} max={100} step={5} onValueChange={setValue} />
      </View>
    </GestureHandlerRootView> */}

<MyCustomSlider 
        min={0} 
        max={100} 
        step={1} 
        onValueChange={(value) => setSliderValue(value)} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
