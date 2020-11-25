import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './components/BottomTabNavigation/BottomTabNavigation';

export default function App() {

  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')

  return (
    <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
            
        </View>
        <BottomNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
