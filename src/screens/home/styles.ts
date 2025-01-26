import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { height, width } from '../../helpers/responsive';

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: width(5),
    },
    container: {
      flexGrow: 1,
      rowGap: height(1),
      marginVertical: width(5),
      paddingBottom: height(10),
    },
    floatingButton: {
      bottom: height(1),
      right: width(6),
      position: 'absolute',
      backgroundColor: colors.primary,
      height: height(6),
      width: height(6),
      borderRadius: height(6),
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: height(4),
      width: height(4),
      tintColor: colors.card,
    },
  });
};

export default useStyles;
