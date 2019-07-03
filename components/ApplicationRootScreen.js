import React, { Component } from 'react';
import Category from './CategoryScreen';
import { AppRegistry, Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class ApplicationRootScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: 'STAR WARS API'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
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
}

export default ApplicationRootScreen;