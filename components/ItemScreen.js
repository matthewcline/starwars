import React, { Component } from 'react';
import { getInitials } from './utils';
import { AppRegistry, Text, View, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class ItemScreen extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    try {
      var url = this.props.navigation.getParam('url', 'NO-URL');
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
      title: navigation.getParam('heading', 'Heading').toUpperCase(),
    };
  };

  getItems() {
    const items = Object.keys(this.state.dataSource).map((key, index) => {  
      return (
        <View
          key={index}
          style={{backgroundColor: 'white', paddingLeft: 10, paddingTop: 20, paddingBottom: 25, marginBottom: 15}}
        >
          <Text style={{fontSize: 13, color: 'gray', paddingBottom: 7}}>
            {key}
          </Text>
          <View style={{borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 11}}>
            <Text style={{fontSize: 15}}>
              {this.state.dataSource[key]}
            </Text>
          </View>
        </View>
      );
    });
    return items;
  }

  render() {
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-URL'); 
    const heading = navigation.getParam('heading', 'heading');
    const initials = getInitials(heading);
    const subheading = navigation.getParam('subheading', 'subheading');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={{backgroundColor: 'black', width: '100%'}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 20, marginBottom: 20, backgroundColor: 'white', width: 100, height: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 60}}>
                { initials }
              </Text>
            </View>
            <View>
              <Text style={{marginBottom: 20, color: 'yellow'}}>
                { subheading }
              </Text>
            </View>
          </View>
          {this.getItems()}
        </ScrollView>
      </View>
    );
  }
}

export default ItemScreen;