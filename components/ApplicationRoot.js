import React, { Component } from 'react';
import Category from './Category';
import { AppRegistry, Image, View, Text } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

class ApplicationRoot extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Category name='People' />
        <Category name='Films' />
        <Category name='Starships' />
        <Category name='Vehicles' />
        <Category name='Species' />
        <Category name='Planets' />
      </View>
    );
  }
}

export default ApplicationRoot;