import { initialStateForDialogs } from "./InitialStates";

const SEND_MESSAGE = "SEND_MESSAGE";


const dialogsReducer = (state = initialStateForDialogs, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
