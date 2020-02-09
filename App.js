import React from 'react'
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreens';
import {createStackNavigator} from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext.js';

const navigator = createStackNavigator({
  
  Index: IndexScreen 
}, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }

});

const App = createAppContainer(navigator)

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}