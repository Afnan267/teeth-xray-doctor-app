import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserProfileHeader from '../../components/UserProfileHeader';
import AiViewerRadioButton from '../../components/AiViewerRadioButton';
import AfnanDropdown, {data} from '../../components/PathologyDropDown';
import PathologyDropdown from '../../components/PathologyDropDown';
import AiViewerDropdown from '../../components/AiViewerDropDown';
import AfnanAiViewerRadioButton from '../../components/AfnanAiViewerRadioButton';

const HomeScreen = () => {
  const [aiViewerVisible, setAiViewerVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <UserProfileHeader />
        <View style={styles.dropDownRadioAiViewerContainer}>
          <PathologyDropdown style={styles.customDropdownStyle} />

          <AfnanAiViewerRadioButton
            style={styles.radioButtonContainer}
            onPress={() => setAiViewerVisible(!aiViewerVisible)}
          />

          {/* <AiViewerRadioButton style={styles.radioButtonContainer} /> */}
          {/* <AiViewerDropdown style={styles.radioButtonContainer} /> */}
        </View>

        {aiViewerVisible && (
          <View style={[styles.aiViewerDetail]}>
            <Text>AFnan</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    // marginEnd: 2,
  },
  radioButtonWrapper: {
    flex: 4,
    alignItems: 'center',
    marginLeft: 2,
  },
  aiViewerDetail: {
    flex: 0,
    height: 200,
    backgroundColor: '#F9F9FF',
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 5,
    marginHorizontal: 22,
    marginTop: 6,
  },
});

export default HomeScreen;
