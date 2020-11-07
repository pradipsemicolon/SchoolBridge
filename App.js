/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */




import React, { Component } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import Route from './src/route/Route';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Route />
    );
  }
}

