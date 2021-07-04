/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import { enableScreens } from 'react-native-screens';
import FixtureScreen from "./app/screens/FixtureScreen";


enableScreens();

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <FixtureScreen></FixtureScreen>
      </NavigationContainer>
    </>
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
