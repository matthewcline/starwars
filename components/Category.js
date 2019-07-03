import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Category extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        {/* <Text>{this.props.name}</Text> */}
        <Text>hi</Text>
        <Button
          onPress={() => goBack()}
          title="Go to Brent's profile"
        />
      </View>
    );
  }
}

export default Category;