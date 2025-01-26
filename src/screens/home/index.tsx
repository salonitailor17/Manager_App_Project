import {
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddTaskModal, TaskCard } from '../../componets';
import useStyles from './styles';

import { addTask, loadTaskList } from '../../store/actions/app/taskActions';
import { activeOpacity } from '../../utils/constants';
import { images } from '../../assets';

const Home = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const [taskName, setTaskName] = useState<string>('');
  const [taskNameError, setTaskNameError] = useState<string>('');

  const rotationValue = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const styles = useStyles();

  const taskData = useSelector((state: any) => state.taskListReducer);

  useEffect(() => {
    Animated.timing(rotationValue, {
      toValue: visible ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  useEffect(() => {
    dispatch(loadTaskList());
  }, []);

  const renderItem = ({ item, index }) => {
    return <TaskCard item={item} index={index} />;
  };

  const handleModal = () => {
    setVisible(true);
  };

  const handleAdd = () => {
    if (taskName === '') {
      setTaskNameError('Please enter task name.');
    } else {
      const data = {
        completed: false,
        id: taskData?.tasks?.[taskData?.tasks?.length - 1]?.id + 1,
        title: taskName,
        userId: 2,
      };
      setTaskName('');
      dispatch(addTask(data));
      setVisible(false);
    }
  };

  const rotate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={taskData?.tasks}
        renderItem={renderItem}
        keyExtractor={(_, i) => i?.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={activeOpacity}
        onPress={handleModal}>
        <Animated.Image
          source={images.plusImage}
          style={[styles.image, { transform: [{ rotate }] }]}
        />
      </TouchableOpacity>
      <AddTaskModal
        value={taskName}
        setValue={setTaskName}
        error={taskNameError}
        setError={setTaskNameError}
        setVisible={setVisible}
        visible={visible}
        handleAdd={handleAdd}
      />
    </View>
  );
};

export default Home;
