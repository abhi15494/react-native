/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  Button,
  Text,
  TextInput,
} from 'react-native';

import { } from 'react-native/Libraries/NewAppScreen';

import styles from './stylesheet/style';
import formstyle from './stylesheet/forms';
import containerStyle from './stylesheet/container';
import buttonStyle from './stylesheet/buttons';
import constantStyle from './stylesheet/constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <SafeAreaView  style={containerStyle.container}>

          <Text style={styles.sectionTitle}>Step 22</Text>


          <Text>{this.state.text}</Text>


          <TextInput
            placeholder="Insert a value"
            style={formstyle.textbox} 
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />

        <Button
          color={constantStyle.color.primary}
          disabled={this.state.text.length<5}
          style={buttonStyle.primary}
          title="Login now"
          onPress={() => this.setState({text: 'button Clicked'})}
        />
      </SafeAreaView >
    );
  }
};


export default App;
