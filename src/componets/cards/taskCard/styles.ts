import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { height, width } from '../../../helpers/responsive';

const useStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    wrapper: {
      flex: 1,
      padding: width(3),
      flexDirection: 'row',
      columnGap: width(2),
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: width(1),
    },
    checkBoxWrapper: {
      height: height(2),
      width: height(2),
      borderWidth: width(0.3),
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: height(1.5),
      width: height(1.5),
      tintColor: colors.card,
    },
    deleteImage: {
      height: height(2),
      width: height(2),
    },
  });
};

export default useStyles;
