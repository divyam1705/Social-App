import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ChatDrawer from './Components/ChatDrawer'
import Requests from './Components/Requests'
const App = () => {
  return (<ScrollView style={styles.container}>
    <View >
      <Requests/>
      <ChatDrawer />

    </View>
  </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#1d1e1f",
    
  }
})