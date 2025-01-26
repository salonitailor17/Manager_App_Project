import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { AppText } from '../../componets';

const About = () => {
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <AppText
        label={`This is a simple task manager \nbuilt with React Native.`}
        centere
      />
    </View>
  );
};

export default About;
