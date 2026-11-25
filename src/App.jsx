import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeader from './TodoHeader';
import TaskItam from './TaskItem';

import './App.css';


function App() {
  return (
    <div className="app-bg d-flex flex-column min-vh-100 p-4">
      <div className="todo-card">
        <TodoHeader />
        <TaskItam />


      </div>
    </div>
  );
}

export default App;
