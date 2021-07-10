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
import FixturePage from "../components/FixturePage";
import Swiper from 'react-native-swiper'
const moment = require('moment');
const momentTimeZone = require('moment-timezone');
momentTimeZone.tz.setDefault('Australia/Melbourne');


function MenFixtureScreen(props) {
  const [allFixtures, setAllFixtures] = useState([]);
  const [curRoundNumber, setCurRoundNumber] = useState([]);
  const [isReady, setIsReady] = useState(false)
  const curTime = moment();

  const getFixtures = async () => {
    try {
      let response = await fetch(
        'http://app-load-balancer-0-1822582057.ap-southeast-2.elb.amazonaws.com/api/v1/touch/games'
        , {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            year: 2021,
            competition: 'men-division-1',
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

  const processFixtureData = roundGames => {
    const roundNumber = [];
    const upcomingGames = [];
    const thisWeekGames = [];
    const fixtureList = [];

    setAllFixtures(roundGames);


    for (let i = 0; i < roundGames.length; i++) {
      const roundFixtures = roundGames[i].fixtures;
      fixtureList.push(roundFixtures);

      if (Array.isArray(roundFixtures) && roundFixtures.length > 0) {
        const game = roundFixtures[roundFixtures.length - 1];
        const gameDateTime = new Date(game.gameDateTimeObject.gameDateTime)
        const momentGameDateTime = moment(gameDateTime);
        const gameRound = parseInt(game.round);
        const isUpcomingRound = moment(curTime).isBefore(momentGameDateTime);
        if (isUpcomingRound) {
          roundNumber.push(gameRound);
          for (const fixture of roundFixtures) {
            upcomingGames.push(fixture);
          }
        }
      }
    }
    setCurRoundNumber(Math.min(...roundNumber));
    setIsReady(true);



    // for (const game of roundGames) {
    //   const gameDateTime = new Date(game.gameDateTimeObject.gameDateTime)
    //   const momentGameDateTime = moment(gameDateTime);
    //   const gameRound = parseInt(game.round);
    //   const isUpcomingGame = moment(curTime).isBefore(momentGameDateTime);
    //   if (isUpcomingGame) {
    //     upcomingGames.push(game);
    //     roundNumber.push(gameRound);
    //   }
    // }
    // const curRoundNumber = Math.min(...roundNumber);

    //filter this week games
    for (const upGame of upcomingGames) {
      if (upGame.round == curRoundNumber) {
        thisWeekGames.push(upGame);
      }
    }
  }
  useEffect(() => { getFixtures() }, []);

  const renderFixturePage = () => {
    console.log('called renderFixtures');

    return (allFixtures.map((weeklyFixtures, i) => {
      return (
        <View key={i} style={styles.slide}>
          <Screen>
            < FixturePage weeklyFixtures={weeklyFixtures} />
          </Screen>
        </View>
      )
    }));
  };

  return (
    <>
      {isReady && (<Swiper index={curRoundNumber - 1} loop={false} key={allFixtures.length} activeDot={
        <View
          style={styles.activeDot}
        />}
      >
        {renderFixturePage()}
      </ Swiper>)}
    </>
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
  },
  slide: {
    flex: 1,
    backgroundColor: colors.primary
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  }
});

export default MenFixtureScreen;
