import React, { Component } from 'react';
import Category from './CategoryScreen';
import { AppRegistry, Image, ImageBackground, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Header extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/application_root_header_gradient.png')}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

class ApplicationRootScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Header />,
    headerTitle: 'STAR WARS API'
  };

  // taken from: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getCategory(endpoint, assetSource) {
    return (
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => {
          this.props.navigation.navigate('Category', {
            url: `https://swapi.co/api/${endpoint}/`,
            categoryTitle: endpoint.toUpperCase()
          });
        }}
      >
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image 
            source={assetSource} 
            style={styles.categoryImage}
          />
        </View>
        <Text style={{flex: 5}}>
          {this.capitalizeFirstLetter(endpoint)}
        </Text>
      </TouchableOpacity>
    );
  }

  getCategories() {
    return (
      <View style={styles.categoriesContainer}>
        {this.getCategory('people', require('../assets/noun_person_1880095.png'))}
        {this.getCategory('films', require('../assets/noun_Film_1666495.png'))}
        {this.getCategory('starships', require('../assets/noun_spaceship_1311585.png'))}
        {this.getCategory('vehicles', require('../assets/noun_Car_1881053.png'))}
        {this.getCategory('species', require('../assets/noun_alien_627223.png'))}
        {this.getCategory('planets', require('../assets/noun_Planet_1867071.png'))}
        <View 
          style={{alignItems: 'center'}}
        >
          <Image style={{margin: 30}} source={require('../assets/ensigns.png')} />
        </View>
      </View>
    );
  }

  getHeader() {
    return (
      // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <ImageBackground 
          source={require('../assets/application_root_header.png')}
          style={{flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end'}}
        >
          <Text style={{color: 'white', marginLeft: '4%', fontSize: 17}}>
            Explore the Star Wars Universe
          </Text>
          <Text style={{color: 'white', margin: '4%'}}>
            Orbiting the planet at maximum velocity.  The moon with the Rebel
            base will be in range in thirty minutes.  This will be a day long remembered.
          </Text>
        </ImageBackground>
    );
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {this.getHeader()}
        {this.getCategories()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    shadowRadius: 1,
    shadowColor: '#95999d',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 2}

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

export default ApplicationRootScreen;