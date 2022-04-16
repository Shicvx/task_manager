import "./style.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import CreateForm from "../CreateForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask, updateTask, deleteTask } from "../../store/actions";
import Frame from "react-frame-component";

const Task = () => {
  const [Modalopen, setModalopen] = useState(false);
  const [Modalopen1, setModalopen1] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TaskList.tasks);

  const [deleteId, setdeleteId] = useState(null);

  const Hidemodal = () => {
    setModalopen(false);
  };

  const Hidemodal1 = () => {
    setModalopen1(false);
  };

  const pull_data = (data) => {
    setModalopen(data); // LOGS DATA FROM CHILD
  }

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  const EditHandler = () => {
    // dispatch(updateTask(id))
    console.log("I am the body ");
  }

  const ModelHandler = (id) => {
    setdeleteId(id);
    setModalopen1(!Modalopen1)
  }

  const DeleteHandler = () => {
    dispatch(deleteTask(deleteId));
    setModalopen1(false);
    setdeleteId(null);
  }


  const TaskListModal = () => {
    return (
      <>
        {tasks?.map((task) => {
          return (
            <div
              className="task_list"
              style={{ padding: "1.5em 1em 0em" }}
              key={task.id}
            >
              <div
                className="task_container"
                style={{
                  borderStyle: "groove",
                  borderRadius: "20px",
                  padding: "1em",
                }}
              >
                <div
                  className="task_label"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="task_priority"
                    style={{
                      backgroundColor: `${(task.priority === '1') ? 'gray' : (task.priority === '2') ? '#dbdb0d' : 'red'}`,
                      borderRadius: "20px",
                      fontSize: "1em",
                      color: "white",
                      fontWeight: "bold",
                      border: "0",
                      padding: "8px 17px",
                    }}
                  >
                    {(task.priority === '1') ? 'Normal' : (task.priority === '2') ? 'Urgent' : 'Important'}
                  </button>
                  <div>
                    <BiEdit
                      style={{
                        width: "20px",
                        height: "auto",
                        marginRight: "1em",
                        cursor: "pointer"
                      }} onClick={() => EditHandler("23")}
                    />
                    <MdDelete style={{ width: "20px", height: "auto", cursor: "pointer" }}
                    onClick={() => ModelHandler(`${task.id}`) }
                    />
                  </div>
                </div>
                <h3>{task.message}</h3>
                <div
                  className="task_info"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "gray",
                  }}
                >
                  <p>assigned to: {task.assigned_name}</p>
                  <p>created on: {task.created_on}</p>
                  <p>Due Date: {task.due_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Modal show={Modalopen} handleClose={Hidemodal}>
        <h2>New data</h2>
        <CreateForm func={pull_data}/>
      </Modal>
      <Modal show={Modalopen1} handleClose={Hidemodal1}>
        <div style={{display: "flex", flexDirection: "column" ,alignItems: "center"}}>
          <h4>Are you sure, you want to delete the task ? </h4>
          <button onClick={DeleteHandler}>Delete</button>
        </div>
      </Modal>
      <div className="column_right">
        <div className="right_header">
          <button
            className="task_button"
            onClick={() => setModalopen(!Modalopen)}
          >
            New Task
          </button>
          <div>
            <input className="right_input" type="search" />
            {/* <button className='task_button'>Filter</button> */}
          </div>
        </div>
        <Frame style={{ width: "100%", height: "95%" }}>
          <TaskListModal />
        </Frame>
      </div>
    </>
  );
};

export default Task;
