import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';

// import react native gesture handler
import 'react-native-gesture-handler';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Chat from './components/Chat';
import Start from './components/Start';

// Creating Stacks
const Stack = createStackNavigator();

export default class App extends React.Component {
  // // Setting the text field to null
  // constructor(props) {
  //   super(props);
  //   this.state = { text: '' };
  // }
  // alertMyText(input = []) {
  //   Alert.alert(input.text);
  // }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
        >
          <Stack.Screen
            name="Start"
            component={Start}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
