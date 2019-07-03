import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class CategoryItem extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>{this.props.name}</Text>
        <Button
          onPress={() => goBack()}
          title="Go to Brent's profile"
        />
      </View>
    );
  }
}

export default Category;