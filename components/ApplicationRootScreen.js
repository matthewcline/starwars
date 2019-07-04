import React, { Component } from 'react';
import Category from './CategoryScreen';
import { AppRegistry, Image, View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class ApplicationRootScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: 'STAR WARS API'
  };

  getCategories() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eaf1f8'}}>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/people/",
              categoryTitle: 'PEOPLE',
            });
          }}
        >
          <Text>
            People
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/films/",
              categoryTitle: 'FILMS',
            });
          }}
        >
          <Text>
            Films
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/starships/",
              categoryTitle: 'STARSHIPS'
            });
          }}
        >
          <Text>
            Starships
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/vehicles/",
              categoryTitle: 'VEHICLES'
            });
          }}
        >
          <Text>
            Vehicles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/species/",
              categoryTitle: 'SPECIES'
            });
          }}
        >
          <Text>
            Species
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            this.props.navigation.navigate('Category', {
              url: "https://swapi.co/api/planets/",
              categoryTitle: 'PLANETS'
            });
          }}
        >
          <Text>
            Planets
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  getHeader() {
    return (
      <Image source={require('../assets/application_root_header.png')} />
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.getHeader()}
        {this.getCategories()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowColor: '#95999d',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 5}

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