import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';
import Team from './Team';

function Fixture({ fixture, onPress }) {
    console.log('fixture');
    console.log(fixture);

    return (
        <TouchableOpacity disabled={true} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.item1}>
                        <Team teamName={fixture.homeTeam.name} />
                    </View>
                    <View style={styles.item2}>
                        <Text style={styles.vs_text}>VS</Text>
                    </View>
                    <View style={styles.item3}>
                        <Team teamName={fixture.awayTeam.name} />
                    </View>
                </View>
                <View style={styles.midContainer}>

                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.game_time}>{fixture.gameDateTimeObject.gameTime}</Text>
                    <Text style={styles.location_text}>{fixture.gameVenue}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        borderRadius: 25,
        //game state not fulltime height = 200
        height: 230,
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.secondary,
        marginTop: 8,
        marginBottom: 8,
        borderWidth: .5,
        borderColor: colors.secondary_border,

    },
    upperContainer: {
        height: 130,
        width: '100%',
        flexDirection: 'row',
        //game state not fulltime flex = .7
        //full time = 0
        // flex: .7,
        
        // backgroundColor: 'blue',
    },
    midContainer: {
        backgroundColor: colors.primary,
        //game state not fulltime flex = .5
        //full time = .3
        flex: .5,
    },
    lowerContainer: {
        //game state not fulltime flex = .5
        //full time = .3
        flex: .3,
        // backgroundColor: 'green',
    },
    item1: {
        flex: .4,
        // backgroundColor: colors.secondary,
    },
    item2: {
        flex: .2,
        // backgroundColor: 'dodgerblue',
        justifyContent: "center", //primary
        // alignItems: "center", //secondary
        // alignSelf: 'center',
        // height: '100%'
    },
    vs_text: {
        alignSelf: 'center',
        color: colors.yellow,
        fontSize: 21,
        fontWeight: "bold",
    },
    item3: {
        flex: .4,
        // backgroundColor: colors.secondary,

    },
    location_text: {
        alignSelf: 'center',
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
    },
    game_time: {
        alignSelf: 'center',
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Fixture;