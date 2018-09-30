import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import styles from './styles';

export default class ScrollPoster extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/original${this.props.poster}` }} />
      </View>
    );
  }
}
