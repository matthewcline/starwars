import React from 'react';
import Category from './components/Category';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          {/* <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link> */}
          <Link to="/people" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Peopl</Text>
          </Link>
        </View>
        {/* <Route exact path="/" component={Category} /> */}
        <Route path="/people" render={() => <Category type={this.path} />} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// // AppRegistry.registerComponent("MyApp", () => App);
