import { FaPlus } from 'react-icons/fa';

const TodoHeader=()=> {
  return (
    <div className="todo-header-wrapper">
      <h2 className="text-center mb-3">به کدیاد خوش آمدید</h2>

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
    </div>
  );
}

export default TodoHeader;
