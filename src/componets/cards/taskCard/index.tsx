import React, { memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import AppText from '../../common/appText';
import { images } from '../../../assets';

import useStyles from './styles';
import { activeOpacity } from '../../../utils/constants';

import {
  deleteTask,
  updateTaskList,
} from '../../../store/actions/app/taskActions';

const TaskCard = ({ item, index }) => {
  const styles = useStyles();
  const { colors } = useTheme();

  const dispatch = useDispatch();

  const handleTaskUpdate = () => {
    dispatch(updateTaskList(item));
  };

  const handleDelete = () => {
    dispatch(deleteTask(item));
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={handleTaskUpdate}
        style={[
          styles.checkBoxWrapper,
          {
            backgroundColor: item?.completed
              ? colors.primary
              : colors.background,
          },
        ]}>
        {item?.completed && (
          <Image source={images.rightImage} style={styles.image} />
        )}
      </TouchableOpacity>
      <AppText label={item?.title} style={{ flex: 1 }} />
      <TouchableOpacity activeOpacity={activeOpacity} onPress={handleDelete}>
        <Image source={images.deleteImage} style={styles.deleteImage} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TaskCard);
