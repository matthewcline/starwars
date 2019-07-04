import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Image, Button, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
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
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{marginLeft: 15, marginTop: 15, marginBottom: 15, backgroundColor: '#D3D3D3', width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 20}}>
                  {item.name ? this.getInitials(item.name) : this.getInitials(item.title)}
                </Text>
              </View>
              <View style={{marginLeft: 15, marginTop: 15}}>
                <Text style={{fontSize: 18}}>
                  {item.name || item.title}
                </Text>
                <Text style={{color: 'gray'}}>
                  {item.birth_year || item.diameter || item.classification || item.model || `${item.opening_crawl.substring(0,20)}...`}
                </Text>
              </View>
            </View>

            {/* <View style={{flex: 1}}> */}
              <View style={{marginTop: 27, marginRight: 5, flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
                <Text style={{color: 'gray'}}>
                  {item.created.substring(0, item.created.indexOf('T'))}
                </Text>
                <Image source={require('../assets/disclosure_caret.png')} />
              </View>
            {/* </View> */}


          </View>
        </TouchableOpacity>
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
    const otherParam = navigation.getParam('otherParam', 'some default value');

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#eaf1f8', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontStyle: 'italic', marginTop: 15}}>"I've altered the deal - Pray I don't alter it any further"</Text>
        <ScrollView style={{flex: 1, marginTop:20, width: '100%'}}>
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