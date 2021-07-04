import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function Team({ }) {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/rebels.png")} style={styles.image} />
            <Text style={styles.text}>Rebels White</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: '100%',
        justifyContent: "center", //primary
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    text: {
        marginTop: 8,
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Team;