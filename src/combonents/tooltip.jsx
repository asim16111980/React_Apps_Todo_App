import { forwardRef } from "react";

const Tooltip = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`pointer-events-none opacity-0 invisisble w-max h-max flex items-center group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute bg-transparent z-10 ${
        props.position == "top"
          ? "flex-col bottom-[calc(100%-8px)] left-[50%] -translate-x-1/2"
          : props.position == "right"
          ? "flex-row-reverse left-[calc(100%-8px)] top-[50%] -translate-y-1/2"
          : props.position == "bottom"
          ? "flex-col-reverse top-[calc(100%-8px)] left-[50%] -translate-x-1/2"
          : "flex-row right-[calc(100%-8px)] top-[50%] -translate-y-1/2"
      }`}
    >
      <span className="rounded-lg p-2 bg-sky-600 text-white text-xs">{props.text}</span>
      <span
        className={`border-8 border-transparent
        ${
          props.position == "top"
            ? "border-t-sky-600"
            : props.position == "right"
            ? "border-r-sky-600"
            : props.position == "bottom"
            ? "border-b-sky-600"
            : "border-l-sky-600"
        }`}
      ></span>
    </div>
  );
});

export default Tooltip;
