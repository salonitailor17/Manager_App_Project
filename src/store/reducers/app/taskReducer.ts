import {
  DELETE_TASK,
  TASK_LIST,
  UPDATE_TASK_LIST,
  ADD_TASK,
} from '../../actions/app/taskActions';

const initialState = {
  tasks: [],
};

export const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK_LIST:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASK_LIST:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
