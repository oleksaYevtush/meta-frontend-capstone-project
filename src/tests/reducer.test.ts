import { ActionTypes } from "src/store/actions";
import { Action, reducer, State } from "src/store/reducers";

const state: State = {
  confirm: true,
  sending: false,
  openMenu: false,
  availableTimes: [],
};

const action: Action<string> = {
  type: ActionTypes.CHANGE_DATE,
};

test("Change the available times", () => {
  const newState = reducer(state, action);
  expect(newState.availableTimes.length).toBeGreaterThan(0);
});

test("Change the confirmation state", () => {
  action.type = ActionTypes.SWITCH_CONFIRM;
  const newState = reducer(state, action);
  expect(newState.confirm).toBeFalsy();
});

test("Change the sending state", () => {
  action.type = ActionTypes.SENDING_DATA;
  const newState = reducer(state, action);
  expect(newState.sending).toBeTruthy();
});

test("Change the open manu state", () => {
  action.type = ActionTypes.OPEN_MENU;
  const newState = reducer(state, action);
  expect(newState.openMenu).toBeTruthy();
});
