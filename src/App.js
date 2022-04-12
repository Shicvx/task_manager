import './App.css';
import axios from 'axios';
import UserList from './components/List';
import Task from './components/Task';

function App() {
  axios.defaults.baseURL = 'https://devza.com/tests/tasks'
  axios.defaults.headers.common['AuthToken'] = 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a';
  return (
    <>
      <div className="Navbar">
        <h3>Task Manager</h3>
      </div>
      <div className="container">
        <div className='body_container'>
          <UserList/>
          <Task />

        </div>
      </div>
    </>
  );
}

export default App;


// UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a
