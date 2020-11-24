import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

import TopBar from './components/TopBar/TopBar';

export default function App() {

  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
    
    <TopBar/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyle: {
    backgroundColor: 'black',
    color: 'black'
  }

});
