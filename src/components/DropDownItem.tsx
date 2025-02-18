import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DropdownItemType} from './PathologyDropDown';

type DropDownItemProps = {
  item: DropdownItemType;
  selectedItem: DropdownItemType | null;
  onSelect: (item: DropdownItemType) => void;
};

const DropDownItem: React.FC<DropDownItemProps> = ({
  item,
  selectedItem,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={() => onSelect(item)}
      style={[
        styles.dropdownItem,
        {
          backgroundColor:
            item.id === selectedItem?.id ? '#fff' : 'transparent',
        },
      ]}>
      <Text style={styles.itemText}>{item.label}</Text>
      <View style={[styles.circle, { backgroundColor: item.color }]}>
        <Text style={styles.numberText}>3</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemText: {
    paddingLeft: 17,
    fontSize: 12,
    color: '#787878',
    textAlign: 'left',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  numberText: {
    // paddingLeft: 17,
    fontSize: 12,
    color: '#303033',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    borderRadius: 9,
    justifyContent: 'space-between',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
      alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
  },
});

export default DropDownItem;
