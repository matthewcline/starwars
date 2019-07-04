import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Button, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class CategoryScreen extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
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
      title: navigation.getParam('categoryTitle', 'categoryTitle'),
      // headerStyle: {
      //   backgroundColor: navigationOptions.headerTintColor,
      // },
      // headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  getItems() {
    const items = this.state.dataSource.map((item, index) => {  
      return (
        <TouchableOpacity
          style={styles.categoryItemContainer}
          key={index + 1}
          onPress={() => {
            this.props.navigation.navigate('Item', {
              itemId: 86,
              heading: item.name || item.title,
              subheading: item.birth_year || item.diameter || item.classification || item.model || `${item.opening_crawl.substring(0,20)}...`,
              url: item.url
            });
          }}
        >
          <View>
            <Text>
              {item.name || item.title}
            </Text>
            <Text>
              {item.birth_year || item.diameter || item.classification || item.model || `${item.opening_crawl.substring(0,20)}...`}
            </Text>
          </View>
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
      <View style={{ flex: 1 }}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: '#d6d7da',
    borderBottomColor: '#d6d7da',
    backgroundColor: 'white',

  },
  categoryImage: {
  },
  categoriesContainer: {
    flex: 2,
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
    backgroundColor: '#eaf1f8', 
    width: '100%'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

export default CategoryScreen;