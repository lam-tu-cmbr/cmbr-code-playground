import React, { useReducer } from 'react';

import { StackNavigator } from './src/navigators/StackNavigator';
import { appReducer, initialState } from './src/reducers/app-reducer';

export const AppContext = React.createContext({});

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <StackNavigator />
    </AppContext.Provider>
  );
};

export default App;
