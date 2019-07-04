import React from 'react';
import ApplicationRootScreen from './components/ApplicationRootScreen';
import CategoryScreen from './components/CategoryScreen';
import ItemScreen from './components/ItemScreen';
import { Image, View, Header, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    ApplicationRoot: ApplicationRootScreen,
    Category: CategoryScreen,
    Item: ItemScreen
  },
  {
    initialRouteName: 'ApplicationRoot',
    defaultNavigationOptions: {
      headerTransparent: false,
      headerBackground: (
        <Image
          style={{position: 'absolute', bottom: 0}}
          source={require('./assets/application_root_header_gradient.png')}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
