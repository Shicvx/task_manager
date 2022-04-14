import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from '../../store/actions';
import './style.css';
import { toast } from "react-toast";


const CreateForm = (props) => {
    const [value, onChange] = useState(new Date());
    const users = useSelector((state) => state.User.users);
    const dispatch = useDispatch();
    const initialFormData = Object.freeze({
        message: "",
        priority: "",
        due_date: "",
        assigned_to: ""
      });
    const [FormData, setFormData] = useState(initialFormData)


    const handleChange = (e) => {
        setFormData({
          ...FormData,
          [e.target.name]: e.target.value,
          due_date: value?.toISOString().split('T')[0] + " " + "16.03.34",
        // due_date: date(value.toISOString()),
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form data,", FormData)
        dispatch(createTask(FormData));
        props.func(false);
        toast.success("New Task Added");
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <textarea className="message_area" name="message" placeholder='Enter text here ...' onChange={handleChange}></textarea>
            <div className="priority_input">
                <h3>Priority</h3>
                <input type="radio" name="priority" onChange={handleChange} value="1"/>
                <label >Normal</label>
                <input type="radio" name="priority" onChange={handleChange} value="2"/>
                <label>Urgent</label>
                <input type="radio" name="priority" onChange={handleChange} value="3"/>
                <label>Important</label>
            </div>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <h3>Due Date</h3>
                <DateTimePicker value={value} onChange={onChange} />
            </div>
                <h3>Assigned to :</h3>
            <div className='form_submit'>
                <label for="cars" style={{marginRight: "2em"}}>Select the user:</label>
                    <select name="assigned_to" onChange={handleChange} className='form_select'>
                        <option selected disabled hidden>-user-</option>
                        {users?.map((user) => {
                            return(
                                <option key={user.id} value={`${user.id}`}>{user.name}</option>
                            )
                        })}
                        
                    </select>
                <button className='form_button' type='submit'>Submit</button>
            </div>
        </form>
        </>
    )
}

export default CreateForm;