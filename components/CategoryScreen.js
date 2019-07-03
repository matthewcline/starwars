import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class CategoryScreen extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    // const url = this.props.navigation.getParam('url', 'NO-URL'); 
    // console.log('url: ', url);
    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       isLoading: false,
    //       url: url,
    //       dataSource: responseJson.results,
    //     }, function(){

    //     });

    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
    // }

    try {
      var url = this.props.navigation.getParam('url', 'NO-URL');
      var topUrl = url;
      var response = await fetch(url);
      var responseJson = await response.json();
      var results = responseJson.results;
      console.log('responseJson: ');
      while (responseJson.next) {
        console.log('responseJson in while loop: ');
        url = responseJson.next;
        response = await fetch(url);
        responseJson = await response.json();
        results = results.concat(responseJson.results);
      }
      console.log("done");
      this.setState({
        isLoading: false,
        dataSource: results,
        url: topUrl
      });
    } catch (error) {
      console.error(error);
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    // console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  getItems() {
    const items = this.state.dataSource.map((item, index) => {  
      return (
        <TouchableOpacity
          key={index + 1}
          onPress={() => {
            console.log("pressed");
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Item', {
              itemId: 86,
              otherParam: 'filmss',
              url: `${this.state.url}/${index + 1}`
            });
          }}
        >
          <Text>
            {item.name}
            {item.birth_year}
          </Text>
        </TouchableOpacity>
      );
    });
    return items;
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-URL');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>url: {JSON.stringify(url)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <ScrollView style={{flex: 1, paddingTop:20}}>
          {/* <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.name}, {item.birth_year}</Text>}
            keyExtractor={({name}, index) => name}
          /> */}
          {this.getItems()}
        </ScrollView>
        {/* <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}

export default CategoryScreen;