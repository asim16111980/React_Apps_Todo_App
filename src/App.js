import Task from "./combonents/task";
import TaskInput from "./combonents/task-input";
import './style/app.css'

function App() {
  return (
    <div className="bg-white w-full max-h-full md:w-4/5 md:my-4 md:rounded flex flex-col items-center py-2 px-2 gap-2 overflow-hidden">
      <h1 className="my-6 text-4xl font-bold text-sky-950">To Do List App</h1>
      <TaskInput />
      <div className="list w-full flex flex-col gap-1 border-2 rounded border-sky-400 px-6 py-3 overflow-auto">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}

export default App;
