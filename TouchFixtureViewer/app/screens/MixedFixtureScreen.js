import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import Screen from "../components/Screen";
const moment = require('moment');
const momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault('Australia/Melbourne');
import Fixture from "../components/Fixture";


function MixedFixtureScreen(props) {
  const [fixtures, setFixtures] = useState([]);
  const [curRound, setCurRound] = useState([]);
  const [fixtureDay, setFixtureDay] = useState([]);
  const [fixtureDate, setFixtureDate] = useState([]);
  const curTime = moment();
  // let curRound = 1;
  // let fixtureDay = 'MONDAY';
  // let fixtureDate = '5TH JULT';

  const getFixtures = async () => {
    try {
      let response = await fetch(
        'http://app-load-balancer-0-1822582057.ap-southeast-2.elb.amazonaws.com/api/v1/touch/games', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          year: 2021,
          competition: 'mixed-division-2',
          season: 'Winter'
        })
      }
      );
      const returnJson = await response.json();
      const games = returnJson.games;
      if (Array.isArray(games)) {
        processFixtureData(returnJson.games);
      } else {
        throw new Error('returnJson its games is not an array!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const processFixtureData = games => {
    const roundNumber = [];
    const upcomingGames = [];
    const thisWeekGames = [];

    for (const game of games) {
      const gameDateTime = new Date(game.gameDateTimeObject.gameDateTime)
      const momentGameDateTime = moment(gameDateTime);
      const gameRound = parseInt(game.round);
      const isUpcomingGame = moment(curTime).isBefore(momentGameDateTime);
      if (isUpcomingGame) {
        upcomingGames.push(game);
        roundNumber.push(gameRound);
      }
    }
    const curRoundNumber = Math.min(...roundNumber);
    //filter this week games
    for (const upGame of upcomingGames) {
      if (upGame.round == curRoundNumber) {
        thisWeekGames.push(upGame);
      }
    }
    const fixtureObj = thisWeekGames[0];
    const fixtureDay = moment(fixtureObj.gameDateTimeObject.gameDateTime).format('dddd')
    setCurRound(curRoundNumber);
    setFixtureDay(fixtureDay);
    setFixtureDate(fixtureObj.gameDateTimeObject.gameDate);
    setFixtures(thisWeekGames);
  }


  useEffect(() => { getFixtures() }, []);

  return (
    <Screen>
      <View blurRadius={2} style={styles.background}>

        <View style={styles.topContainer}>
          <Text style={styles.fixtureInfo_text}>{fixtureDay} {fixtureDate}</Text>
          <Text style={styles.fixtureInfo_text}>Round {curRound}</Text>
        </View>

        <View style={styles.contentContainer}>

          <FlatList
            data={fixtures}
            keyExtractor={fixture => fixture._id.toString()}
            renderItem={({ item }) => (
              <Fixture fixture={item} />
            )}
          />
        </View>
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
    backgroundColor: colors.primary,
    alignItems: "center",
    flex: .1,
  },
  contentContainer: {
    flex: .9,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: colors.light,
  },
  fixtureInfo_text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default MixedFixtureScreen;
