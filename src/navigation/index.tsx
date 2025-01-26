import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyTabBar from './BottomTab';
import routes from './routes';

import Home from '../screens/home';
import About from '../screens/about';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerTitleStyle: {
    textTransform: 'capitalize',
  },
};

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} />}
          screenOptions={screenOptions}>
          <Tab.Screen name={routes.app.home} component={Home} />
          <Tab.Screen name={routes.app.about} component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
