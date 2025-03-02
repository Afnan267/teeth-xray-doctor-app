import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserProfileHeader from '../../components/UserProfileHeader';
import PathologyDropdown from '../../components/PathologyDropDown';
import AfnanAiViewerRadioButton from '../../components/AfnanAiViewerRadioButton';
import AiViewerDetail from '../../components/AiViewerDetail';
import ImageUploaderView from '../../components/ImageUploaderView';
import HomeBottomContainer from '../../components/HomeBottomContainer';
import ChatBotModal from '../../components/modal/ChatBotModal';
 import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [aiViewerVisible, setAiViewerVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleAiViewer = () => {
    setAiViewerVisible(!aiViewerVisible);
    setDropdownVisible(false); // Close dropdown when AI Viewer opens
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setAiViewerVisible(false); // Close AI Viewer when Dropdown opens
  };

  const [isChatVisible, setChatVisible] = useState(false);

  const handleBottomIconClick = (selectedIcon: string) => {
    console.log('Selected Icon:', selectedIcon);
    // Perform actions based on the selected icon
    if (selectedIcon === 'dentistry') setChatVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <UserProfileHeader navigation={navigation} />
        <View style={styles.dropDownRadioAiViewerContainer}>
          <PathologyDropdown
            style={styles.customDropdownStyle}
            dropdownVisible={dropdownVisible}
            toggleDropdown={toggleDropdown}
          />

          <AfnanAiViewerRadioButton
            style={styles.radioButtonContainer}
            aiViewerVisible={aiViewerVisible}
            onPress={toggleAiViewer}
          />
        </View>
        {aiViewerVisible && <AiViewerDetail style={[styles.aiViewerDetail]} />}

        <ImageUploaderView style={styles.imageUploaderContainer} />

        <HomeBottomContainer
          style={styles.homeBottomContainer}
          onBottomIconClick={handleBottomIconClick}
        />

        <ChatBotModal
          visible={isChatVisible}
          onClose={() => setChatVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeBottomContainer: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 17,
    borderRadius: 17,
    flex: 1,
  },
  imageUploaderContainer: {
    backgroundColor: '#F9F9FF',
    marginHorizontal: 15,
    marginTop: 5,
    borderRadius: 12,
    zIndex: 1,
  },
  dropDownRadioAiViewerContainer: {
    marginTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  customDropdownStyle: {
    width: '100%',
    flex: 6,
  },
  radioButtonContainer: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
    marginLeft: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  dropdownWrapper: {
    flex: 6,
  },
  radioButtonWrapper: {
    flex: 4,
    alignItems: 'center',
    marginLeft: 2,
  },
  aiViewerDetail: {
    flex: 0,
    backgroundColor: '#F9F9FF',
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 5,
    marginHorizontal: 22,
    marginTop: 6,
    paddingBottom: 17,
    zIndex: 2,
  },
});

export default HomeScreen;
