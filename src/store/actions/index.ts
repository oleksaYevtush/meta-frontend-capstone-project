import { Action } from "src/store/reducers";

export const enum ActionTypes {
  OPEN_MENU = "OPEN_MENU",
  CHANGE_DATE = "CHANGE_DATE",
  SWITCH_CONFIRM = "SWITCH_CONFIRM",
  SENDING_DATA = "SENDING_DATA",
}

export const updateTimes = (date: string): Action<string> => {
  return {
    type: ActionTypes.CHANGE_DATE,
    payload: date,
  };
};

export const switchConfirmation = (): Action<string> => {
  return {
    type: ActionTypes.SWITCH_CONFIRM,
  };
};

export const sendData = (): Action<string> => {
  return {
    type: ActionTypes.SENDING_DATA,
  };
};

export const openMenu = (): Action<string> => {
  return {
    type: ActionTypes.OPEN_MENU,
  };
};
