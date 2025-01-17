import Tooltip from "./tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import useTooltipPosition from "../hooks/useTooltipPosition";

const Task = () => {
  const parentRef = useRef(null);
  const tooltipPosition = useTooltipPosition(parentRef);
  // console.log(tooltipPosition);
  return (
    <div className="w-full flex flex-col items-stretch sm:flex-row bg-sky-400 rounded p-2 gap-2">
      <span className="w-10 mx-auto h-10 bg-white rounded-full"></span>
      <span className="flex-1 px-1 py-2 text-left text-sky-950 bg-white rounded font-bold">
        task text
      </span>
      <div className="flex gap-1">
        <button
          ref={parentRef}
          type="button"
          className="group relative w-1/2 sm:w-10 sm:h-10 sm:rounded-full py-1 text-center bg-white rounded"
        >
          <Tooltip text="Edit the task" />
          <span className="text-sky-950 flex justify-center items-center">
            <FontAwesomeIcon icon={faPen} className="hidden sm:block" />
            <span className="font-bold sm:hidden">Edit</span>
          </span>
        </button>
        <button
          type="button"
          className="group relative w-1/2 sm:w-10 sm:h-10 sm:rounded-full py-1 text-center bg-white rounded"
        >
          <Tooltip text="Delete the task" />
          <span className="text-sky-950 flex justify-center items-center">
            <FontAwesomeIcon icon={faTrash} className="hidden sm:block" />
            <span className="font-bold sm:hidden">Delete</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Task;
