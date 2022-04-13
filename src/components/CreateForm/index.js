import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './style.css';

const CreateForm = () => {
    const [value, onChange] = useState(new Date());

    const handleSubmit = () => {
        console.log("Submitted button")
    }

    return (
        <>
        <textarea className="message_area" name="comment" form="usrform" placeholder='Enter text here ...'></textarea>
        <form>
            <div className="priority_input">
                <h3>Priority</h3>
                <input type="radio" id="html" name="priority" value="HTML"/>
                <label for="html">Normal</label>
                <input type="radio" id="css" name="priority" value="CSS"/>
                <label for="css">Important</label>
                <input type="radio" id="javascript" name="priority" value="JavaScript"/>
                <label for="javascript">Urgent</label>
            </div>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <h3>Due Date</h3>
                <DateTimePicker onChange={onChange} value={value} />
            </div>
                <h3>Assigned to :</h3>
            <div className='form_submit'>
                <label for="cars" style={{marginRight: "2em"}}>Select the user:</label>
                    <select name="cars" id="cars" className='form_select'>
                        <option selected disabled hidden>-user-</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                <button className='form_button' onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
        </>
    )
}

export default CreateForm;