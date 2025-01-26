import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { height } from '../helpers/responsive';
import { AppText } from '../componets';

const MyTabBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row' }}>
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={styles.wrapper}
            key={index}>
            <AppText
              label={label}
              color={isFocused ? colors.primary : colors.text}
              style={{
                textTransform: 'capitalize',
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: height(8),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
