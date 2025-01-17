import Tooltip from "./tooltip";
import { useRef } from "react";
import useTooltipPosition from "../hooks/useTooltipPosition";

const TaskInput = () => {
  const parentRef = useRef(null);
  const tooltipPosition = useTooltipPosition(parentRef);
  console.log(tooltipPosition);
  return (
    <div className="w-full flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        className="flex-1 ring-2 focus:ring-sky-500 ring-sky-400 outline-none rounded-sm px-2 py-1"
      />
      <button
        ref={parentRef}
        type="button"
        className="bg-sky-700 px-4 py-2 rounded relative group"
      >
        <Tooltip text="Add new task" />
        <span className="text-white text-base">Add</span>
      </button>
    </div>
  );
};

export default TaskInput;
