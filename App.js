import React from 'react';

import {Provider} from 'react-redux';

import {store} from './src/redux/store';




import { SafeAreaView, Text } from 'react-native';
import Adddevice from './src/screens/addDevice/AddDevice';
import Buy from './src/screens/buyDevice/Buy';
import Home from './src/screens/home/Home';
import IntroSlider from './src/screens/introSlider/IntroSlider';
import Login from './src/screens/login/Login';
import Mapview from './src/screens/map/MapView';
import Detail from './src/screens/posts/detail';
import Regsiter from './src/screens/register/Register';
import Tasks from './src/screens/tasks/Tasks';
import UserProfile from './src/screens/userProfile/UserProfile';
import Posts from './src/screens/posts/Posts';
import Register from './src/screens/register/Register';
const App = () => {
  return (
    // <IntroSlider/>
   
    <Provider store={store}>
    <Login />
  </Provider>

    // <Register/>
    // <Home />
    // <Adddevice/>
    // <Buy />
    // <Detail/>
    // <Mapview/>
    // <Posts/>
    // <Tasks/>
    // <UserProfile/>

  );
};
export default App;
