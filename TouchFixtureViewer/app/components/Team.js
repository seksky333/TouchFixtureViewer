import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function Team({ teamName }) {
    const [imgSource, setImgSource] = useState([]);

    // setImgSource('../assets/others.png');
    const setImage = () => {
        const isRebels = teamName.includes("Rebels");

        if (isRebels)
            setImgSource(require('../assets/rebels.png'));
        else setImgSource(require('../assets/others.png'));

    }

    useEffect(() => { setImage() }, []);

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={imgSource} style={styles.image} />

                {/* <Image source={require(imgSource)} style={styles.image} /> */}

            </View>
            <View style={styles.lowerContainer}>
                <Text style={styles.text}>{teamName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.primary,
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    upperContainer: {
        marginTop: 8,
        flex: .6,
    },
    lowerContainer: {
        marginTop: 4,
        flex: .4,

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    text: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default Team;