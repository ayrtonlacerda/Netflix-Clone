import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';
import api from './services/api';

import HomePage from './pages/home';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
