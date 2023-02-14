import { fetchAPI } from "src/apis";
import { ActionTypes } from "src/store/actions";

export type Action<T> = {
  type: string;
  payload?: T;
};

export type State = {
  openMenu: boolean;
  confirm: boolean;
  availableTimes: string[];
  sending: boolean;
};

export type ReturnState = { [type: string]: State };

export const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
};

export const updateTimes = (payload: string | undefined) => {
  const date = payload ? new Date(payload) : new Date();

  return fetchAPI(date);
};

export const reducer = (state: State, action: Action<string>) => {
  const states: ReturnState = {
    [ActionTypes.CHANGE_DATE]: {
      ...state,
      availableTimes: updateTimes(action.payload),
    },
    [ActionTypes.SWITCH_CONFIRM]: {
      ...state,
      confirm: !state.confirm,
    },
    [ActionTypes.SENDING_DATA]: {
      ...state,
      sending: true,
    },
    [ActionTypes.OPEN_MENU]: {
      ...state,
      openMenu: !state.openMenu,
    },
  };

  return action.type ? states[action.type] : { ...state };
};
