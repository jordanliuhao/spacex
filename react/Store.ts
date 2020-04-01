import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { StateType } from "typesafe-actions";
import { catchError } from "rxjs/operators";
import { spacexReducer, getSpaceXListEpic, startSpacexEpic, spacexSelectedEpic, SpacexAction } from './ui/spacexlist/SpacexListViewModel';

const appReducers = combineReducers({
    spacexList: spacexReducer,
});

const appEpics = (action$, store$) =>
    combineEpics(
        spacexSelectedEpic,
        startSpacexEpic,
        getSpaceXListEpic,
    )(action$, store$).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export type AppState = StateType<typeof appReducers>;
export type AppAction = SpacexAction;

const epicMiddleware = createEpicMiddleware();

function configureStore() {
    const store = createStore(
        appReducers,
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(appEpics);
    return store;
}
const store = configureStore();

export default store;
