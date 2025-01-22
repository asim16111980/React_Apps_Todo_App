import Tooltip from "./tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import getTooltipPosition from "../utils/getTooltipPosition";

const Task = () => {
  const editParentRef = useRef(null);
  const deleteParentRef = useRef(null);
  const editTooltipRef = useRef(null);
  const deleteTooltipRef = useRef(null);
  const [editTooltipPosition, setEditTooltipPosition] = useState({
    direction: "",
    top: 0,
    left: 0,
  });
  const [deleteTooltipPosition, setDeleteTooltipPosition] = useState({
    direction: "",
    top: 0,
    left: 0,
  });
  // Function to handle hover event on element to show tooltip
  const handleHoverEditEvent = () => {
    setEditTooltipPosition(getTooltipPosition(editParentRef, editTooltipRef));
    editTooltipRef.current.classList.add("group-hover:*:scale-100");
  };
  const handleHoverDeleteEvent = () => {
    setDeleteTooltipPosition(getTooltipPosition(deleteParentRef, deleteTooltipRef));
    deleteTooltipRef.current.classList.add("group-hover:*:scale-100");
  };
  return (
    <div className="w-full flex flex-col items-stretch sm:flex-row bg-sky-400 rounded p-2 gap-2">
      <span className="w-10 mx-auto h-10 bg-white rounded-full"></span>
      <span className="flex-1 px-1 py-2 text-left text-sky-950 bg-white rounded font-bold">
        task text
      </span>
      <div className="flex gap-1">
        <button
          ref={editParentRef}
          type="button"
          onMouseEnter={handleHoverEditEvent}
          className="group relative w-1/2 sm:w-10 sm:h-10 sm:rounded-full py-1 text-center bg-white rounded"
        >
          <Tooltip
            text="Edit the task"
            ref={editTooltipRef}
            position={editTooltipPosition}
          />
          <span className="text-sky-950 flex justify-center items-center">
            <FontAwesomeIcon icon={faPen} className="hidden sm:block" />
            <span className="font-bold sm:hidden">Edit</span>
          </span>
        </button>
        <button
          ref={deleteParentRef}
          type="button"
          onMouseEnter={handleHoverDeleteEvent}
          className="group relative w-1/2 sm:w-10 sm:h-10 sm:rounded-full py-1 text-center bg-white rounded"
        >
          <Tooltip
            text="Delete the task"
            ref={deleteTooltipRef}
            position={deleteTooltipPosition}
          />
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
