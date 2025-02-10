import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfileHeader from '../../components/UserProfileHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <UserProfileHeader></UserProfileHeader>
    </View>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},

})

export default HomeScreen