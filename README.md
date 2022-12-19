# Chat APP

## Features and Requirements

### 1. User Stories
1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.
2. As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.
3. As a user, I want to send images to my friends to show them what I’m currently doing.
4. As a user, I want to share my location with my friends to show them where I am.
5. As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
6. As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.



## 2. Key Features
1. A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
2. A page displaying the conversation, as well as an input field and submit button.
3. The chat must provide users with two additional communication features: sending images
and location data.
4. Data gets stored online and offline.



## 3. Technical Requirements
1. The app must be written in React Native.
2. The app must be developed using Expo.
3. The app must be styled according to the given screen design.
4. Chat conversations must be stored in Google Firestore Database.
5. The app must authenticate users anonymously via Google Firebase authentication.
6. Chat conversations must be stored locally.
7. The app must let users pick and send images from the phone’s image library.
8. The app must let users take pictures with the device’s camera app, and send them.
9. The app must store images in Firebase Cloud Storage.
10. The app must be able to read the user’s location data.
11. Location data must be sent via the chat in a map view.
12. The chat interface and functionality must be created using the Gifted Chat library.
13. The app’s codebase must contain comments.

## 4. Dependencies
  - "@react-native-async-storage/async-storage": "~1.17.3",
  -  "@react-native-community/masked-view": "^0.1.11",
  -  "@react-native-community/netinfo": "9.3.5",
  -  "@react-navigation/native": "^6.0.16",
  -  "@react-navigation/stack": "^6.3.7",
  -  "expo": "~47.0.8",
  -  "expo-image-picker": "~14.0.2",
  -  "expo-location": "~15.0.1",
  -  "expo-permissions": "~14.0.0",
  -  "expo-status-bar": "~1.4.2",
  -  "firebase": "^9.15.0",
  -  "react": "18.1.0",
  -  "react-native": "0.70.5",
  -  "react-native-gesture-handler": "~2.8.0",
  -  "react-native-gifted-chat": "^1.0.4",
  -  "react-native-maps": "1.3.2",
  -  "react-native-reanimated": "~2.12.0",
  -  "react-native-safe-area-context": "4.4.1",
  -  "react-native-screens": "~3.18.0",
  -  "react-native-web": "~0.18.7",
  -  "react-navigation": "^4.4.4"

## 5. User Guide
1. Open the App
2. Type your name in the inout field
3. Choose your background Color
4. Press Start Chatting
5. You can either use one of the 4 options to send:
    - You can type a message and send your written message
    - You can press the '+' symbol which will give the following 4 options:
      - 'Choose From Library' (This is to choose an existing picture from you mobile/ desktop storage, once selected it will send the information.)
      - 'Take Picture' this will access your Camera and allow you to take and send a picture. 
      - 'Send Location' will send your direct location to the recipient. 
      - 'Cancel' will send you back to the chat screen. 
  
  Please enjoy using the app!
  
  
