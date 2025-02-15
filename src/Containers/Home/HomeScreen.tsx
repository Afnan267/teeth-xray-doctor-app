import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserProfileHeader from '../../components/UserProfileHeader';
import AiViewerRadioButton from '../../components/AiViewerRadioButton';
import AfnanDropdown, {data} from '../../components/PathologyDropDown';
import PathologyDropdown from '../../components/PathologyDropDown';
import AiViewerDropdown from '../../components/AiViewerDropDown';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <UserProfileHeader />
        <View style={styles.dropDownRadioAiViewerContainer}>
          <PathologyDropdown style={styles.customDropdownStyle} />
          {/* <AiViewerRadioButton style={styles.radioButtonContainer} /> */}
          <AiViewerDropdown style={styles.radioButtonContainer} />
        </View>
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
});

export default HomeScreen;
