import React, { Component } from 'react';
import Category from './CategoryScreen';
import { AppRegistry, Image, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// class ApplicationRoot extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Category name='People' />
//         <Category name='Films' />
//         <Category name='Starships' />
//         <Category name='Vehicles' />
//         <Category name='Species' />
//         <Category name='Planets' />
//       </View>
//     );
//   }
// }

class ApplicationRootScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: 'header'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Category', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

export default ApplicationRootScreen;