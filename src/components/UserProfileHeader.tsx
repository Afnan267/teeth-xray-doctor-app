import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DocsIcon, ExitAppIcon, PrintIcon} from '../Assets/Svg';
import {useSignoutWithEmail} from '../hooks/useEmailAuth/useSignoutWithEmail';

type UserProfileHeaderProps = {
  navigation: any; // Type can be improved if you have typed navigation
};

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({navigation}) => {
  const {signoutWithEmail, loading, error} = useSignoutWithEmail();

  const handleSignOut = async () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await signoutWithEmail();
          if (!error) {
            navigation.replace('Login'); // Navigate to login screen
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileRow}>
        <Image
          source={{
            uri: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
          }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.dateText}>Monday Jan-19</Text>
          <Text style={styles.profileName}>John Doe</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <View style={styles.unSelectedIconContainer}>
          <DocsIcon width={20} height={20} />
        </View>

        <Pressable
          style={({pressed}) => [
            styles.unSelectedIconContainer,
            {opacity: pressed ? 0.7 : 1, marginHorizontal: 8},
          ]}
          onPress={handleSignOut}>
          <PrintIcon width={20} height={20} />
        </Pressable>

        <View style={styles.selectedIconContainer}>
          <ExitAppIcon width={20} height={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedIconContainer: {
    backgroundColor: '#178CF7',
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center', // Horizontal centering
    justifyContent: 'center', // Vertical centering
  },
  unSelectedIconContainer: {
    backgroundColor: '#F9F9FF',
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center', // Horizontal centering
    justifyContent: 'center', // Vertical centering
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    paddingHorizontal: 22,
    paddingTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  dateText: {
    color: '##787878',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    alignSelf: 'center',
  },
  profileName: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default UserProfileHeader;
