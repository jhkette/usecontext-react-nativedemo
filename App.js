import React from 'react'
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreens';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext.js';

const navigator = createStackNavigator({
  
  Index: IndexScreen,
  Show: ShowScreen, 
  Create: CreateScreen 
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
});

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}