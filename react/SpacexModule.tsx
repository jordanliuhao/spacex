import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from "react-redux";
import SpacexListView from "./ui/spacexlist/SpacexListView";
import SpacexDetailView from "./ui/spacexdetail/SpacexDetailView";
import store from "./Store";

const MainNavigator = createStackNavigator({
    SpacexListView: SpacexListView,
    SpacexDetailView: SpacexDetailView,
},
    {
        initialRouteName: 'SpacexListView',
        defaultNavigationOptions: {
        },
    });

const AppContainer = createAppContainer(MainNavigator);

export default class SpaceXModule extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
