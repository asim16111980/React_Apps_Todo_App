import "./App.css";
import Task from "./combonents/task";
import TaskInput from "./combonents/task-input";

function App() {
 
  return (
    <div className="bg-white w-full max-h-[96%] md:w-4/5 md:my-4 md:rounded flex flex-col items-center py-2 px-2 gap-2">
      <TaskInput />
      <div className="flex-1 w-full flex flex-col gap-1 border-2 rounded border-sky-400 p-2">
        <Task />
      </div>
    </div>
  );
}

export default App;
