import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TabView, SceneMap } from "react-native-tab-view";
import { SafeAreaView } from 'react-navigation';
import { MonoText } from "../components/StyledText";


const recommendations = [
  {
    id: '1234',
    location: {
      latitude:43.6475052,
      longitude: -79.3975761,
    },
    address: '129 Spadina Ave, Toronto, On',
    title: 'IT Service',
    description: 'Cisco router no longer works. Please replace',
    budget: 500.00,
    dateTime: '',
    dateCreated: '',
    dateAssigned: '',
  },
  {
    id: '1235',
    location: {
      latitude: 43.6465263,
      longitude: -79.4604926,
    },
    address: '350 King St W, Toronto, ON M5V 3X5',
    title: 'IT Service',
    description: 'Cisco router no longer works. Please replace',
    budget: 250.00,
    dateTime: '',
    dateCreated: '',
    dateAssigned: '',
  },
  {
    id: '1236',
    location: {
      latitude: 43.6585056,
      longitude: -79.4282065,
    },
    address: '27 King\'s College Cir, Toronto, ON M5S',
    title: 'IT Service',
    description: 'Cisco router no longer works. Please replace',
    budget: 320.00,
    dateTime: '',
    dateCreated: '',
    dateAssigned: '',
  }
]

const Recommendations = () => (
  <MapView
    style={styles.container}
    initialRegion={{
      latitude: 43.6465263,
      longitude: -79.4282065,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
  >
  {recommendations.map(marker => (
    <Marker
      key={marker.id}
      coordinate={marker.location}
      title={marker.title}
      description={marker.description}
    />
  ))}
  </MapView>
);

const Blank = () => (
  <View>
    <Text>Blank</Text>
  </View>
);

export default class HomeScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'INVITED' },
      { key: 'second', title: 'RECOMMENDED' },
      { key: 'third', title: 'APPLIED' },
      { key: 'forth', title: 'ASSIGNED' },
    ],
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'orange' }]}>
      <SafeAreaView  />
      <View style={[styles.contentContainer, {backgroundColor: 'orange', flexDirection: 'row'}]}>
        <Image style={{ width: 50, height: 50 }} resizeMode={'center'} source={require('../assets/images/wm-white-icon.png')} />
        <View style={{ justifyContent:'center'}}><Text style={{ color: 'white', fontSize: 20}}>My Work</Text></View>
      </View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: Recommendations,
            second: Blank,
            third: Blank,
            forth: Blank,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          labelStyle={[styles.tabBarInfoText, {backgroundColor: 'orange'}]}
          tabStyle={{backgroundColor: 'orange'}}
          
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
