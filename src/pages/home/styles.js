import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.halfblack,

  },

  header: {
    backgroundColor: 'rgba(0,0,0, 1)',
    alignItems: 'center',
    height: 60,
    padding: 10,
  },

  imageHeader: {
    height: 35,
    width: 130,

  },

  scroll: {
    marginLeft: metrics.baseMargin
  },

  TitleTipes: {
    fontSize: 16,
    color: colors.white,
    //fontWeight: 'bold',
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
  },

  modalImage: {
    width: 400,
    height: 250,
  },
});

export default styles;
