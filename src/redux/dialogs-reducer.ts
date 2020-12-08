const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type InitialStateType = {
    dialogs: Array<{id: number, name: string}>;
    messages: Array<{id: number, message: string}>;
    newMessageBody: string;
};

let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Name_1'},
        {id: 2, name: 'Name_2'},
        {id: 3, name: 'Name_3'},
        {id: 4, name: 'Name_4'},
        {id: 5, name: 'Name_5'},
        {id: 6, name: 'Name_6'}
    ],
    messages: [
        {id: 1, message: 'message_1'},
        {id: 2, message: 'message_2'},
        {id: 3, message: 'message_3'},
        {id: 4, message: 'message_4'},
        {id: 5, message: 'message_5'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action: any) => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
       case SEND_MESSAGE:
           let body = state.newMessageBody;
           state.newMessageBody = '';
           state.messages.push({id: 6, message: body});
           return state;
       default:
           return state;
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;