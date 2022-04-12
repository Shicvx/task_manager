import { ImCross } from "react-icons/im";
import './style.css';

export default function Model({ handleClose, show, children }) {
  return (
      <>
        <div className={show ? 'modal_container_show' : "modal_container"}>
          <div style={{ position: "fixed",background: '#f4f1f1',width: "50%", height: "auto",top: '50%',left: '50%', borderRadius: '1rem',padding: '2rem',transform: 'translate(-50%, -50%)',textAlign: "left" }}>
              {children}
              <div style={{position: "fixed",top: "0",right: "0",marginRight: "1rem",marginTop: "1rem", transition: "transform 0.4s", cursor: "pointer"}}>
                <ImCross
                    style={{ width: "20px", height: "auto" }}
                    onClick={handleClose}
                />
              </div>
          </div>
        </div>
      </>
  );
}
