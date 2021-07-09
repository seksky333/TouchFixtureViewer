import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenFixtureScreen from "../screens/MenFixtureScreen";
import MixedFixtureScreen from "../screens/MixedFixtureScreen";
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Men Fixture"
      component={MenFixtureScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="chess-king"
            type="material-community"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Mixed Fixture"
      component={MixedFixtureScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="chess-queen"
            type="material-community"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
