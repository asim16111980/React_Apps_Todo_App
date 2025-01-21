import { forwardRef } from "react";

const Tooltip = forwardRef((props, ref) => {
  const {
    text,
    position: { direction , top, right, bottom, left },
  } = props;
  return (
    <div
      ref={ref}
      className={`pointer-events-none scale-0 w-max h-max flex items-center  transition-[transform] fixed bg-transparent z-10 ${
        direction === "top"
          ? `flex-col`
          : direction === "right"
          ? "flex-row-reverse"
          : props.position === "bottom"
          ? "flex-col-reverse top-[calc(100%-8px)] left-[50%] -translate-x-1/2"
          : "flex-row right-[calc(100%-8px)] top-[50%] -translate-y-1/2"
      }`}
      style={{ top: top + "px", left: left + "px" }}  
    >
      <span className="rounded-lg p-2 bg-sky-600 text-white text-xs">
        {text}
      </span>
      <span
        className={`border-8 border-transparent
        ${
          direction === "top"
            ? "border-t-sky-600"
            : props.position === "right"
            ? "border-r-sky-600"
            : props.position === "bottom"
            ? "border-b-sky-600"
            : "border-l-sky-600"
        }`}
      ></span>
    </div>
  );
});

export default Tooltip;
