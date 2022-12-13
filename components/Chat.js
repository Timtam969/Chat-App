import React from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Import functions from SDKs
// const firebase = require("firebase");
require("firebase/firestore");

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: 0,
      user: {
        _id: '',
        name: '',
        avatar: '',
      },
    };

    const firebaseConfig = {
      apiKey: "AIzaSyDspqCydCsXfsxs_byKPHMhtFruOIjighE",
      authDomain: "chat-app-e0842.firebaseapp.com",
      projectId: "chat-app-e0842",
      storageBucket: "chat-app-e0842.appspot.com",
      messagingSenderId: "722620341423",
      appId: "1:722620341423:web:a3d8feb6c3622ca1c4485a",
      measurementId: "G-2PQNJ29WF8"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    //create reference to 'messages' collection
    this.referenceChatMessages = firebase.firestore().collection('messages');
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      () => {
        // this.saveMessages();
        this.addMessages(this.state.messages[0]);
        // this.deleteMessages();
      });
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text || '',
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: 'https://placeimg.com/140/140/any',
        }
      });
    });
    this.setState({ messages });
  }

  addMessages = () => {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text || '',
      createdAt: message.createdAt,
      user: message.user,
    });
  };


  componentDidMount() {
    // Set the name property to be included in the navigation bar
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    this.referenceChatMessages = firebase.firestore().collection('messages');

    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }

      //update user state with currently active user data
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
          avatar: 'https://placeimg.com/140/140/any',
        }
      });

      this.unsubscribe = this.referenceChatMessages.orderBy("createdAt", "desc").onSnapshot(this.onCollectionUpdate);

    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.authUnsubscribe();
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#E0DCCC',
          },
          right: {
            backgroundColor: '#5475A0'
          }
        }}
      />
    )
  }

  render() {
    // Set the background Color chosen on the on Start Screen
    let color = this.props.route.params.color;
    let name = this.props.route.params.name;
    return (
      // Importing the Background Color prop
      <View style={[styles.container, { backgroundColor: color }]}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          // user={this.state.user}
          user={{
            _id: this.state.uid,
            name: name,
            avatar: 'https://placeimg.com/140/140/any',
          }}
        />

        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});