import React from "react";
import { FaPlus, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';


const TaskItam = () =>{
    return(
        <div>
                    {/* List */}
        <ul className="list-group todo-list">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            کار شماره ۱
            <div>
              <button className="btn btn-danger btn-sm me-1">
                <FaTrash />
              </button>
              <button className="btn btn-warning btn-sm me-1">
                <FaTimes />
              </button>
              <button className="btn btn-success btn-sm">
                <FaCheck />
              </button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            کار شماره ۲
            <div>
              <button className="btn btn-danger btn-sm me-1">
                <FaTrash />
              </button>
              <button className="btn btn-warning btn-sm me-1">
                <FaTimes />
              </button>
              <button className="btn btn-success btn-sm">
                <FaCheck />
              </button>
            </div>
          </li>
        </ul>
        </div>

    )

}

export default TaskItam;