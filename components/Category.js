import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Category extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Category;