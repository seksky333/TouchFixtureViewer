import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import BusinessScreen from '../screens/BusinessScreen';
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import routes from '../navigation/routes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.Business}
      component={BusinessScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.BusinessDetails}
      component={BusinessDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.Payments} component={PaymentScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
