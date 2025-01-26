import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { width, height } from '../../../helpers/responsive';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    modal: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    wrapper: {
      backgroundColor: colors.card,
      borderRadius: width(3),
      width: width(90),
      padding: width(5),
    },
    title: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: height(0.5),
    },
    image: {
      height: height(2.5),
      width: height(2.5),
      transform: [{ rotate: '45deg' }],
    },
    message: {
      marginTop: height(1),
    },
    textInput: {
      marginVertical: height(1),
    },
    input: {
      borderRadius: width(1),
      paddingHorizontal: width(4),
      paddingVertical: width(2),
      borderWidth: width(0.3),
    },
    error: {
      alignSelf: 'flex-end',
    },
    btn: {
      padding: height(0.6),
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: width(1),
    },
  });
};

export default useStyles;
