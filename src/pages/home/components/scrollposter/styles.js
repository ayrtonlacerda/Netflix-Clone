import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.halfblack,
    //marginLeft: metrics.baseMargin * 2,
  },

  poster: {
    width: 100,
    height: 150,
    margin: metrics.baseMargin,
  }
});

export default styles;
