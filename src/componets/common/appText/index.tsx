import React, { memo } from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { height } from '../../../helpers/responsive';

interface AppTextProps {
  label: string | number;
  color?: string;
  style?: TextStyle;
  size?: number;
  fontWeight?: any;
  centere?: boolean;
}

const AppText = ({
  label,
  color,
  style,
  size,
  fontWeight,
  centere,
}: AppTextProps) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        style,
        {
          color: color ? color : colors.text,
          fontSize: size ? size : height(1.8),
          fontWeight: fontWeight ? fontWeight : '500',
          textAlign: centere ? 'center' : 'auto',
        },
      ]}>
      {label}
    </Text>
  );
};

export default memo(AppText);
