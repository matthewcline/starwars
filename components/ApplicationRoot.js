// import React, { Component } from 'react';
// import Category from './Category';
// import { AppRegistry, Image, View, Text } from 'react-native';
// import { NativeRouter, Route, Link } from "react-router-native";

// class ApplicationRoot extends Component {
//   render() {
//     return (
//       <NativeRouter>
//         <View style={styles.container}>
//           <View style={styles.nav}>
//             {/* <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//               <Text>Home</Text>
//             </Link> */}
//             <Link to="/people" underlayColor="#f0f4f7" style={styles.navItem}>
//               <Text>People</Text>
//             </Link>
//             <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
//               <Text>Topics</Text>
//             </Link>
//           </View>

//           {/* <Route exact path="/" component={Category} /> */}
//           <Route path="/people" render={() => <Category type={this.path} />} />
//         </View>
//       </NativeRouter>
//         <Category name='People' />
//         <Category name='Films' />
//         <Category name='Starships' />
//         <Category name='Vehicles' />
//         <Category name='Species' />
//         <Category name='Planets' />
//     );
//   }
// }

// export default ApplicationRoot;


// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>About</Text>
//         </Link>
//         <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </View>
//   </NativeRouter>
// );

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: 25,
// //     padding: 10
// //   },
// //   header: {
// //     fontSize: 20
// //   },
// //   nav: {
// //     flexDirection: "row",
// //     justifyContent: "space-around"
// //   },
// //   navItem: {
// //     flex: 1,
// //     alignItems: "center",
// //     padding: 10
// //   },
// //   subNavItem: {
// //     padding: 5
// //   },
// //   topic: {
// //     textAlign: "center",
// //     fontSize: 15
// //   }
// // });