import AsyncStorage from '@react-native-async-storage/async-storage';

export const TASK_LIST = 'TASK_LIST';
export const UPDATE_TASK_LIST = 'UPDATE_TASK_LIST';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK = 'ADD_TASK';

export const loadTaskList = () => {
  return async dispatch => {
    try {
      const storedData = await AsyncStorage.getItem('taskList');

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        dispatch({ type: TASK_LIST, payload: parsedData });
      } else {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const data = await response.json();

        await AsyncStorage.setItem(
          'taskList',
          JSON.stringify(data.slice(0, 50)),
        );

        dispatch({ type: TASK_LIST, payload: data.slice(0, 50) });
      }
    } catch (error) {
      console.error('Failed to load task', error);
    }
  };
};

export const updateTaskList = data => {
  return async (dispatch, getState) => {
    const currentData = getState()?.taskListReducer?.tasks;

    const updatedData = currentData?.map(task =>
      task?.id === data?.id ? { ...task, completed: !task?.completed } : task,
    );

    await AsyncStorage.setItem('taskList', JSON.stringify(updatedData));

    dispatch({ type: UPDATE_TASK_LIST, payload: updatedData });
  };
};

export const deleteTask = data => {
  return async (dispatch, getState) => {
    const currentData = getState()?.taskListReducer?.tasks;

    const updatedData = currentData?.filter(task => task?.id !== data?.id);

    await AsyncStorage.setItem('taskList', JSON.stringify(updatedData));

    dispatch({ type: DELETE_TASK, payload: updatedData });
  };
};

export const addTask = data => {
  return async (dispatch, getState) => {
    const currentData = getState()?.taskListReducer?.tasks;

    const updatedData = [...currentData, data];

    await AsyncStorage.setItem('taskList', JSON.stringify(updatedData));

    dispatch({ type: ADD_TASK, payload: updatedData });
  };
};
