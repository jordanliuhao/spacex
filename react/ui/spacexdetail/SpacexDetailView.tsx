import React from "react";
import { View, Text, StyleSheet } from "react-native";

class SpacexDetailView extends React.Component<{}, {}> {
    static navigationOptions = {
        title: 'Rocket',
    };

    render() {
        let data = this.props.navigation.state.params.launch
        return (
            <View style={styles.wrapper}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={styles.name}>Rocket Name: {data.rocket.rocket_name}</Text>
                    <Text style={styles.type}>Rocket Type: {data.rocket.rocket_type}</Text>
                    <Text style={styles.reuse}>Reused: Not applicable</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
    },
    name: {
        fontSize: 18,
        color: 'black',
    },
    type: {
        fontSize: 14,
    },
    reuse: {
        fontSize: 14,
    },
});

export default SpacexDetailView
