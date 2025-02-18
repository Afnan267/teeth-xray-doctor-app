import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
  SectionList,
} from 'react-native';
import DropDownDisplayTitle from './DropDownDisplayTitle';
import DropDownItem from './DropDownItem';
import AiViewerRadioButton from './AiViewerRadioButton';

export const data = [
  {label: 'Caries', value: '1', color: 'red'},
  {label: 'Calculus', value: '2', color: 'blue'},
  {label: 'Notable Margin', value: '3', color: 'green'},
  {label: 'Bone loss', value: '4', color: 'purple'},
];

export const sectionedData = [
  {
    title: 'Pathology',
    data: [
      {label: 'Caries', id: '1', color: '#FFABF9'},
      {label: 'Calculus', id: '2', color: '#66DDAD'},
      {label: 'Notable Margin', id: '3', color: '#DEB2FF'},
      {label: 'Bone loss', id: '4', color: '#ffffff'},
      {label: 'Periapical radiolucency', id: '5', color: '#ffffff'},
      {label: 'Widened PDL', id: '6', color: '#ffffff'},
    ],
  },
  {
    title: 'Non Pathology',
    data: [
      {label: 'Filling', id: '7', color: '#ffffff'},
      {label: 'Crown', id: '8', color: '#ffffff'},
      {label: 'Bridge', id: '9', color: '#ffffff'},
      {label: 'Root Canal', id: '10', color: '#ffffff'},
      {label: 'Implant', id: '11', color: '#ffffff'},
    ],
  },
];

export type DropdownItemType = {
  id: string;
  label: string;
  color: string;
};

type NewCustomDropdownProps = {
  style?: StyleProp<ViewStyle>;
};

const AiViewerDropdown: React.FC<NewCustomDropdownProps> = ({style}) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItemType | null>(
    null,
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (item: DropdownItemType) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  return (
    <View style={style}>
      <AiViewerRadioButton
        style={styles.radioButtonContainer}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      />

      {/* Dropdown List */}
      {dropdownVisible && (
        <View style={StyleSheet.absoluteFillObject}>
          <DropdownList
            data={sectionedData}
            selectedItem={selectedItem}
            onSelect={handleSelect}
          />
        </View>
       )}
    </View>
  );
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const DropdownList: React.FC<{
  data: {title: string; data: DropdownItemType[]}[];
  selectedItem: DropdownItemType | null;
  onSelect: (item: DropdownItemType) => void;
}> = ({data, selectedItem, onSelect}) => {
  return (
    <View style={[styles.dropdown, {width: SCREEN_WIDTH}]}>
      <SectionList
        sections={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DropDownItem
            item={item}
            selectedItem={selectedItem}
            onSelect={onSelect}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <DropDownDisplayTitle
            title={title}
            textStyle={styles.sectionHeaderText}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  selectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9F9FF',
    borderRadius: 30,
  },
  selectedText: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 8,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  dropdown: {
    position: 'absolute',
    top: 60, // Adjust as needed
    left: 0, // Ensure it starts from the left edge of the screen
    right: 0, // Ensure it extends to the right edge
    width: SCREEN_WIDTH, // Force full screen width
    backgroundColor: '#F9F9FF',
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  radioButtonContainer: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
    marginLeft: 2,
  },
  aiViewerDetail: {
    flex: 1,
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

export default AiViewerDropdown;
