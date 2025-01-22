import Tooltip from "./tooltip";
import { useRef, useState } from "react";
import getTooltipPosition from "../utils/getTooltipPosition";

const TaskInput = () => {
  const parentRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({
    direction: "",
    top: 0,
    left: 0,
  });
  // Function to handle hover event on element to show tooltip
  const handleHoverEvent = () => {
    setTooltipPosition(getTooltipPosition(parentRef, tooltipRef));
    tooltipRef.current.classList.add("group-hover:*:scale-100");
  };
  return (
    <div className="w-full flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        className="flex-1 border-2 border-sky-400 focus:border-sky-500 outline-none rounded px-2 py-1"
      />
      <button
        ref={parentRef}
        type="button"
        className="bg-sky-700 px-4 py-2 rounded group"
        onMouseEnter={handleHoverEvent}
      >
        <Tooltip
          text="Add new task"
          position={tooltipPosition}
          ref={tooltipRef}
        />
        <span className="text-white text-base">Add</span>
      </button>
    </div>
  );
};

export default TaskInput;
