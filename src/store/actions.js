import axios from 'axios';
import qs from "qs"; 
import { toast } from "react-toast";

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
        .then(res => dispatch({ type: "GET_LIST", payload: res.data.tasks.reverse().slice(0,12) }))
        .catch(error => console.log(error))
    }
  };

  export const createTask = (body) => {
    return (dispatch) => {
        axios.post('/create', qs.stringify(body))
        .then(res => console.log("I am the Response",res))
        .then(() => {
          toast.success("New Task Added");
          dispatch(getAllTask());

        })
        .catch(() => toast.error("Oops! Something went wrong."))
    }
  };