import React from 'react';

import { Provider } from 'react-redux';

import { store } from './src/redux/store';
 

const App = () => {


  return (
  
    <Provider store={store}>
    <Reduxscreen/>
    </Provider>
   

  );
};
export default App;
