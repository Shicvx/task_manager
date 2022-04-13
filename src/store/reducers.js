import { combineReducers } from "redux";

const UserState = {
    users: null,
  };
  
  function UserReducer(state = UserState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  }

  const TaskListState = {
    tasks: null,
  };
  
  function TaskListReducer(state = TaskListState, action) {
    switch (action.type) {
      case "GET_LIST":
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  }
  




  const reducers = combineReducers({
    User: UserReducer,
    TaskList: TaskListReducer
    //other reducers come here...
  });
  
  export default reducers;