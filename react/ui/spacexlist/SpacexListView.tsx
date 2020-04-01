import React from "react"
import { View, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native"
import { AppState } from "../../Store"
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import { SpacexItem, spacexActions } from "./SpacexListViewModel"
import SpacexCell from "./SpacexCell"
import { Launch } from "../../api/model/launch"


export interface SpacexListViewProps {
    startAction: () => undefined
    spacexSelectedAction: (row: number) => undefined
    hideSpacexDetailAction: () => undefined
    hideErrorAction: () => undefined

    spacexs: Array<SpacexItem>
    showSpacexDetail: boolean
    selectedLaunch: Launch
    error: string
};

const mapStateToProps = (state: AppState) => ({
    spacexs: state.spacexList.spacexs,
    showSpacexDetail: state.spacexList.showSpacexDetail,
    selectedLaunch: state.spacexList.selectedLaunch,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({
        startAction: () => spacexActions.startAction(),
        spacexSelectedAction: (row) => spacexActions.spacexSelectedAction(row),
        hideSpacexDetailAction: () => spacexActions.hideSpacexDetailAction(),
        hideErrorAction: () => spacexActions.hideErrorAction(),
    }, dispatch)

class SpacexListView extends React.Component<SpacexListViewProps, {}> {
    static navigationOptions = {
        title: 'Launches',
    };

    constructor(props: SpacexListViewProps) {
        super(props)
        this.onSpacexPressed = this.onSpacexPressed.bind(this)
        this.showSpacexDetailView = this.showSpacexDetailView.bind(this)
    }

    onSpacexPressed(row: number) {
        this.props.spacexSelectedAction(row)
    }

    showSpacexDetailView(launch: Launch) {
        this.props.navigation.navigate("SpacexDetailView", { launch: launch })
        this.props.hideSpacexDetailAction()
    }

    componentDidMount() {
        this.props.startAction()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showSpacexDetail != this.props.showSpacexDetail && this.props.showSpacexDetail) {
            this.showSpacexDetailView(this.props.selectedLaunch)
        }

        if (prevProps.error != this.props.error && this.props.error != "") {
            Alert.alert(this.props.error)
            this.props.hideErrorAction()
        }
    }    

    render() {

        return (
            <View style={styles.wrapper}>
                <FlatList
                    style={styles.spacexs}
                    data={this.props.spacexs}
                    renderItem={({ item, index, separators }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => this.onSpacexPressed(index)}>
                                <SpacexCell
                                    data={item}></SpacexCell>
                            </TouchableOpacity>
                        )
                    }}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    spacexs: {
        flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpacexListView)
