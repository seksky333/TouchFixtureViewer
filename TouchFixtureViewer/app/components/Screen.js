import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import colors from '../config/colors';

function Screen({ children, style }) {
  return (

    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 2 : 0,
    backgroundColor: colors.primary,
  },
  status_bar: {
    backgroundColor: colors.primary,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
