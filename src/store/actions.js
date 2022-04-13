import axios from 'axios';

export const getAllUsers = () => {
    return (dispatch) => {
        axios.get('/listusers')
        .then(res => dispatch({ type: "GET_USER", payload: res.data.users }))
        .catch(error => console.log(error))
    }
  };


  export const getAllTask = () => {
    return (dispatch) => {
        axios.get('/list')
        .then(res => dispatch({ type: "GET_LIST", payload: res.data.tasks.slice(0,12) }))
        .catch(error => console.log(error))
    }
  };