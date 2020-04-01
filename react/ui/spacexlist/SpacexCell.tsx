import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const SpacexCell = ({data, ...otherProps}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <ImageBackground
                        style={ styles.back }
                        source={ require("../../assets/spacex_logo_square.png") }>
                            <Image
                                style={styles.thumb}
                                source={{uri: data.image == null ? "" : data.image }} />
                    </ImageBackground>
                </View>
                <View style={styles.midContainer}>
                    <Text
                        style={styles.title}>
                        {data.title}
                    </Text>
                    <Text
                        style={styles.subtitle}>
                        {data.subtitle}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text
                        style={[styles.status, { color: data.statusColor }]}>
                        {data.status}
                    </Text>
                </View>
            </View>
            <View style={styles.separator}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingLeft: 30,
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row',
        height: '100%',
        backgroundColor: 'white',
    },
    leftContainer: {
        flex: 0,
    },
    midContainer: {
        flex: 1,
        marginLeft: 30,
    },
    rightContainer: {
        flex: 0,
        paddingRight: 30,
    },
    back: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumb: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: "100%",
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    subtitle: {
        width: "100%",
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
        marginTop: 10,
    },
    status: {
        fontSize: 12,
        fontWeight: '900',
        
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    },
});

export default SpacexCell;