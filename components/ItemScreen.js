import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class ItemScreen extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  async componentDidMount() {
    try {
      var url = this.props.navigation.getParam('url', 'NO-URL');
      console.log('url here: ', url);
      var response = await fetch(url);
      var responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    } catch (error) {
      console.error(error);
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('title', 'Title'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  getItems() {
    const items = Object.keys(this.state.dataSource).map((key, index) => {  
      return (
        <View
          key={index}
        >
          <Text>
            {key}
          </Text>
          <Text>
            {this.state.dataSource[key]}
          </Text>
        </View>
      );
    });
    return items;
  }

  getInitials = (str) => {
    let initials = '';
    let words = str.split(" ");
    if (words.length > 0) {
      initials += words[0][0];
      if (words.length > 1) {
        initials += words[1][0]
      }
    }
    return initials;
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-URL'); 
    const heading = navigation.getParam('heading', 'heading');
    const initials = this.getInitials(heading);
    const subheading = navigation.getParam('subheading', 'subheading');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    console.log(this.state.dataSource);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>{ initials }</Text>
          <Text>{ subheading }</Text>
        </View>
        <ScrollView>
          {this.getItems()}
        </ScrollView>
      </View>
    );
  }
}

export default ItemScreen;