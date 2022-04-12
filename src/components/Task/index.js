import './style.css';
import {MdDelete} from "react-icons/md";
import {BiEdit} from "react-icons/bi";
import { useState } from 'react';
import Modal from '../Modal';
import CreateForm from '../CreateForm';

const Task = () => {
    const [Modalopen, setModalopen] = useState(false);
    const Hidemodal = () => {
        setModalopen(false);
      };

    return (
        <>
        <Modal show={Modalopen} handleClose={Hidemodal}>
            <h2>New data</h2>
            <CreateForm />
        </Modal>
            <div className="column_right">
                <div className='right_header'>
                    <button className='task_button' onClick={() => setModalopen(!Modalopen)}>New Task</button>
                    <div>

                    <input className='right_input' type="search" />
                    {/* <button className='task_button'>Filter</button> */}
                    </div>
                </div>
                <div className="task_list">
                    <div className='task_container'>
                        <div className='task_label'>
                            <button className='task_priority'>Priority</button>
                            <div>
                                <BiEdit style={{ width: "20px", height: "auto", marginRight: "1em" }}/>
                                <MdDelete style={{ width: "20px", height: "auto" }}/>
                            </div>

                        </div>
                        <h3>Task Topic not working </h3>
                        <div className="task_info">
                            <p>assigned to: Armin</p>
                            <p>created on: 02/03/2021</p>
                            <p>Due Date: 03/04/2021</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Task;