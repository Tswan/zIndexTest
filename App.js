import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <Header headerText="zIndex Demo" />
      <View style={{flex:1}}>
        <View style={styles.overlay}/>
        <List>
          <ListItem text={'Mulan'} image={'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/zMrk2G3XsnfYKiIp1NEfdtvDyBH.jpg'}/>
          <ListItem text={'Mission: Impossible - Fallout'} image={'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg'}/>
        </List>
      </View>
    </View>
  );
}

const Header = (props) => (
  <View style={styles.header}>
    <Text style={{color:'white'}}>{props.headerText}</Text>
  </View>
)

const List = (props) => (
  <View style={styles.list}>
    {props.children}
  </View>
)

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Text style={styles.metadata}>{props.text}</Text>
    <Image style={styles.heroImage} source={{uri: props.image }}/>
  </View>
)
// styles, root

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    flex:1,
  },
  header: {
    backgroundColor: '#545353',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    color: '#fff',
  },
  list: {
    width: "100%",
    height: "100%",
  },
  metadata: {
    position:'absolute',
    bottom: 20,
    left: 20,
    zIndex: 1000,
    elevation: 1000,
    color: 'white',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
    opacity: 0.5
  }
  
});

// const AppWrapper = () => (
//   <View style={{
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1
//   }}>
//     <App />
//   </View>
// )

// AppRegistry.registerComponent('App', () => AppWrapper)
// AppRegistry.runApplication(
//   'App',
//   { rootTag: document.getElementById('react-root') }
// )