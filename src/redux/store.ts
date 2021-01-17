// Types
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: RerenderEntireTreeType;
    subscribe: SubscribeType
    dispatch: DispatchType
}

export type StateType = {
    profilePage: profileStateType
    dialogsPage: messagesStateType
}

export type PostType = {
    id: number
    post: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostDataType = Array<PostType>
export type DialogsDataType = Array<DialogsType>
export type MessagesDataType = Array<MessagesType>

export type profileStateType = {
    posts: PostDataType
    newPostText: string
}

export type messagesStateType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageBody: string
}

export type RerenderEntireTreeType = (state: StateType) => void
export type SubscribeType = (observer: RerenderEntireTreeType) => void

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type DispatchType = (action: ActionsType) => void

// Store
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'My first post', likes: 1},
                {id: 2, post: 'My second post', likes: 2},
                {id: 3, post: 'My third post', likes: 3},
                {id: 4, post: 'My fourth post', likes: 4},
                {id: 5, post: 'My fifth post', likes: 5}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mark'},
                {id: 2, name: 'Ivan'},
                {id: 3, name: 'Issac'},
                {id: 4, name: 'Robert'},
                {id: 5, name: 'Arthur'}
            ],
            messages: [
                {id: 1, message: 'My name is Mark'},
                {id: 2, message: 'My name is Ivan'},
                {id: 3, message: 'My name is Issac'},
                {id: 4, message: 'My name is Robert'},
                {id: 5, message: 'My name is Arthur'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber(state: StateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}