/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
const momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault('Australia/Melbourne');
import colors from './app/config/colors';

enableScreens();


export default function App() {



  useEffect(() => { 
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor(colors.primary);
   }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
