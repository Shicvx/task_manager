import "./style.css";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import CreateForm from "../CreateForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../../store/actions";
import Frame from "react-frame-component";

const Task = () => {
  const [Modalopen, setModalopen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.TaskList.tasks);

  const Hidemodal = () => {
    setModalopen(false);
  };

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);


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
                      }}
                    />
                    <MdDelete style={{ width: "20px", height: "auto" }} />
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
        <CreateForm />
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
