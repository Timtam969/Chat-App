import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';



export default class Chat extends React.Component {
  componentDidMount() {
    // Set the name property to be included in the navigation bar
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }
  render() {
    let color = this.props.route.params.color;

    return (
      <View style={[styles.container, { backgroundColor: color }]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});