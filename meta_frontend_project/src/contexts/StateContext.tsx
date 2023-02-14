import * as React from "react";
import * as Actions from "src/store/actions";
import { initializeTimes, reducer, State } from "src/store/reducers";

export type Handlers = {
  handleUpdateTimes: (date: string) => void;
  handleSwitchConfirmation: () => void;
  handleSendData: () => void;
  handleOpenMenu: () => void;
};

export type Store = State & Handlers;

const initialState: State = {
  openMenu: false,
  confirm: false,
  availableTimes: initializeTimes(),
  sending: false,
};

export const StateContext = React.createContext<Store>({
  ...initialState,
  handleUpdateTimes: (_date: string) => {},
  handleSwitchConfirmation: () => {},
  handleSendData: () => {},
  handleOpenMenu: () => {},
});

const StateContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleUpdateTimes = (date: string) => {
    dispatch(Actions.updateTimes(date));
  };

  const handleSwitchConfirmation = () => {
    dispatch(Actions.switchConfirmation());
  };

  const handleSendData = () => {
    dispatch(Actions.sendData());
  };

  const handleOpenMenu = () => {
    dispatch(Actions.openMenu());
  };

  const store: Store = {
    openMenu: state.openMenu,
    availableTimes: state.availableTimes,
    confirm: state.confirm,
    sending: state.sending,
    handleUpdateTimes,
    handleSwitchConfirmation,
    handleSendData,
    handleOpenMenu,
  };

  return (
    <StateContext.Provider value={store}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
