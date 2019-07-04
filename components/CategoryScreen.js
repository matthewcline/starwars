import React, { Component } from 'react';
import { getDate, getInitials } from './utils';
import { Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

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
      while (responseJson.next) {
        url = responseJson.next;
        response = await fetch(url);
        responseJson = await response.json();
        results = results.concat(responseJson.results);
      }
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
    return {
      title: navigation.getParam('categoryTitle', 'categoryTitle'),
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
              subheading: item.birth_year || item.diameter || item.classification || item.model || item.opening_crawl,
              url: item.url
            });
          }}
        >
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{marginLeft: 15, marginTop: 15, marginBottom: 15, backgroundColor: '#D3D3D3', width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 22}}>
                  {item.name ? getInitials(item.name) : getInitials(item.title)}
                </Text>
              </View>
              <View style={{marginLeft: 15, marginTop: 15}}>
                <Text style={{fontSize: 18, paddingBottom: 4}}>
                  {item.name || item.title}
                </Text>
                <Text style={{color: 'gray'}}>
                  {item.birth_year || item.diameter || item.classification || item.model || `${item.opening_crawl.substring(0,20)}...`}
                </Text>
              </View>
            </View>

            <View style={{marginTop: 20, marginLeft: 5, marginRight: 5, flex: 2, alignItems: 'flex-end', justifyContent: 'flex-start'}}>
              <Text style={{color: 'gray', paddingBottom: 5}}>
                {getDate(item.created)}
              </Text>
              <Image source={require('../assets/disclosure_caret.png')} />
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return items;
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#eaf1f8', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontStyle: 'italic', marginTop: 15, fontSize: 12}}>"I've altered the deal - Pray I don't alter it any further"</Text>
        <ScrollView style={{flex: 1, marginTop:20, width: '100%'}}>
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
  }
});

export default CategoryScreen;