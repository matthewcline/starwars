import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class Category extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View >
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Category;