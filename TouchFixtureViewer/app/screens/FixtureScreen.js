import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import Screen from "../components/Screen";

import Fixture from "../components/Fixture";

function FixtureScreen(props) {
  let curRound = 1;
  const fixtureDay = 'MONDAY';
  const fixtureDate = '5TH JULT';
  console.log('Executed');
  return (
    <Screen>
      <View blurRadius={2} style={styles.background}>

        <View style={styles.topContainer}>
          <Text style={styles.fixtureInfo_text}>{fixtureDay} {fixtureDate}</Text>
          <Text style={styles.fixtureInfo_text}>Round {curRound}</Text>
        </View>

        <ScrollView style={styles.contentContainer}>
          <Fixture />
          <Fixture />
          <Fixture />
          <Fixture />
          <Fixture />

        </ScrollView>

      </View >
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    alignItems: "center",
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: colors.yellow,
  },
  fixtureInfo_text: {
    color: colors.medium,
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default FixtureScreen;
