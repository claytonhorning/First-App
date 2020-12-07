import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TopBar from '../TopBar/TopBar';
import Icon from "react-native-vector-icons/EvilIcons";
import Colors from "../../constants/colors";
import FocusUpInitialScreen from '../../Screens/FocusUpScreens/FocusUpInitialScreen';
import PurchaseCoinsScreen from '../../Screens/WalletScreens/PurchaseCoinsScreen';
import LoginScreen from '../../Screens/LoginScreens/LoginScreen';
import SignUpScreen from '../../Screens/LoginScreens/SignUpScreen';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
        activeTintColor: Colors.primary,
    }}>
       <Tab.Screen
        name="Account"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={40} />
          ),
        }}
      />
       <Tab.Screen
        name="Focus"
        component={FocusUpInitialScreen}
        options={{
          tabBarLabel: 'Focus',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clock" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={PurchaseCoinsScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;