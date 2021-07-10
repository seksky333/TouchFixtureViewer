import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
const moment = require('moment');
import Fixture from "./Fixture";
import colors from '../config/colors';

function FixturePage({ weeklyFixtures, onPress }) {
    // const [curRound, setCurRound] = useState([]);
    // const [fixtureDay, setFixtureDay] = useState([]);
    // const [fixtureDate, setFixtureDate] = useState([]);
    const fixtures = weeklyFixtures.fixtures;
    let fixtureDay, fixtureDate, curRound;


    const configurePage = () => {
        //display
        const fixtureObj = fixtures[0];
        curRound = fixtureObj.round;
        fixtureDay = moment(fixtureObj.gameDateTimeObject.gameDateTime).format('dddd')
        fixtureDate = fixtureObj.gameDateTimeObject.gameDate;
    }
    configurePage();

    return (
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
        </View>
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
});

export default FixturePage;