import {CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./users-reducer";
import {authReducer, AuthStateType} from "./auth-reducer";


export type CombinedActionsType =
    DialogsActionsType | ProfileActionsType | UsersActionsType

export type DispatchType = (action: CombinedActionsType) => void

export type CombinedStateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
    usersPage: UsersStateType
    auth: AuthStateType
}>

// Redux
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(reducers)