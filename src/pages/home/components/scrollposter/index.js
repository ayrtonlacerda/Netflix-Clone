import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class ScrollPoster extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/original${this.props.poster}` }} />
        </TouchableOpacity>
      </View>
    );
  }
}
