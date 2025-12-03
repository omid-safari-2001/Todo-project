import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="app-bg d-flex flex-column min-vh-100 p-4">
      <h2 className="text-center mb-3">به کدیاد خوش آمدید</h2>

      <div className="todo-card flex-grow-1 d-flex flex-column">
        {/* Input */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="کار جدید..."
          />
          <button className="btn btn-success">
            <FaPlus /> ثبت
          </button>
        </div>

        {/* List */}
        <ul className="list-group todo-list flex-grow-1 overflow-auto">
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
    </div>
  );
}

export default App;
