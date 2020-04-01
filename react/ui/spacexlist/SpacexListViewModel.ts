import { deprecated, createReducer, isActionOf, ActionType, StateType } from "typesafe-actions"
const { createAction, createStandardAction, createCustomAction } = deprecated
import { filter, switchMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
import { getLaunches } from "../../api/ApiProvider"
import { Launch } from "../../api/model/launch"

export const spacexActions = {
    startAction: createAction('@SPACEX/START'),
    getSpacexListAction: createAction("@SPACEX/GET_SPACEX_LIST"),
    spacexSelectedAction: createAction("@SPACEX/SPACEX_SELECTED", resolve => (row: number) => resolve({row})),
    showSpacexDetailAction: createAction("@SPACEX/SHOW_SPACEX_DETAIL", resolve => (launch: Launch) => resolve({launch})),
    hideSpacexDetailAction: createAction("@SPACEX/HIDE_SPACEX_DETAIL"),
    showSpacexAction: createAction("@SPACEX/SHOW_SPACEX", resolve => (launches: Array<Launch>) => resolve({launches})),
    showErrorAction: createAction("@BASE/SHOW_ERROR", resolve => (message: string) => resolve({ message })),
    hideErrorAction: createAction("@BASE/HIDE_ERROR"),
}

export type SpacexAction = ActionType<typeof spacexActions>

export interface SpacexItem {
    readonly image: string
    readonly title: string
    readonly subtitle: string
    readonly status: string
    readonly statusColor: string
}

export interface SpacexState {
    readonly launches: Array<Launch>
    readonly spacexs: Array<SpacexItem>
    readonly showSpacexDetail: boolean
    readonly selectedLaunch: Launch
    readonly error: string
}

const initialState = {
    launches: [],
    spacexs: [],
    showSpacexDetail: false,
    selectedLaunch: {},
    error: "",
}

export const spacexReducer = createReducer<SpacexState, SpacexAction>(initialState)
    .handleAction(spacexActions.showSpacexDetailAction, (state, action) => {
        return {
            ...state,
            showSpacexDetail: true,
            selectedLaunch: action.payload.launch
        }
    })
    .handleAction(spacexActions.hideSpacexDetailAction, (state, action) => {
        return {
            ...state,
            showSpacexDetail: false,
        }
    })
    .handleAction(spacexActions.showSpacexAction, (state, action) => {
        return {
            ...state,
            launches: action.payload.launches,
            spacexs: action.payload.launches.map((launch) => {
                let spacex: SpacexItem = {
                    image: launch.links.mission_patch,
                    title: launch.mission_name,
                    subtitle: launch.launch_date_utc,
                    status: launch.upcoming ? "Upcoming" : (launch.launch_success ? "Successful" : "Failed"),
                    statusColor: launch.upcoming ? "blue" : (launch.launch_success ? "green" : "red"),
                }
                return spacex
            })
        }
    })
    .handleAction(spacexActions.showErrorAction, (state, action) => {
        return {
            ...state,
            error: action.payload.message,
        }
    })
    .handleAction(spacexActions.hideErrorAction, (state, action) => {
        return {
            ...state,
            error: "",
        }
    })
    
export const spacexSelectedEpic = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(spacexActions.spacexSelectedAction)),
        switchMap((action) => {
            let launch = state$.value.spacexList.launches[action.payload.row]
            return of(spacexActions.showSpacexDetailAction(launch))
        }),
        catchError(e => of(
            spacexActions.showErrorAction(e.message))
        ),
    )

export const startSpacexEpic = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(spacexActions.startAction)),
        switchMap(() => 
            of(spacexActions.getSpacexListAction())
        ),
        catchError(e => of(
            spacexActions.showErrorAction(e.message))
        ),
)

export const getSpaceXListEpic = (action$, state$) =>
    action$.pipe(
        filter(isActionOf(spacexActions.getSpacexListAction)),
        switchMap(() => {
            return getLaunches().pipe(
                map((launches) => {
                    return spacexActions.showSpacexAction(launches)
                }),
            )
        }),
        catchError(e => of(
            spacexActions.showErrorAction(e.message))
        ),
    )

