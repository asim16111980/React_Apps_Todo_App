import { forwardRef } from "react";

const Tooltip = forwardRef((props, ref) => {
  const {
    text,
    position: { direction, top, left },
  } = props;
  return (
    <div
      ref={ref}
      className="pointer-events-none w-max h-max fixed bg-transparent z-10"
      style={{
        top: top + "px",
        left: left + "px",
      }}
    >
      <div
        className={` flex items-center scale-0 transition-[transform] ${
          direction === "top"
            ? `flex-col`
            : direction === "right"
            ? "flex-row-reverse"
            : direction === "bottom"
            ? "flex-col-reverse"
            : "flex-row"
        }`}
      >
        <span className="rounded-lg p-2 bg-sky-600 text-white text-xs">
          {text}
        </span>
        <span
          className={`border-8 border-transparent
        ${
          direction === "top"
            ? "border-t-sky-600"
            : direction === "right"
            ? "border-r-sky-600"
            : direction === "bottom"
            ? "border-b-sky-600"
            : "border-l-sky-600"
        }`}
        ></span>
      </div>
    </div>
  );
});

export default Tooltip;
