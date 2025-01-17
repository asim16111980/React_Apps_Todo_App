import { forwardRef } from "react";

const Tooltip = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={"opacity-0 invisisble w-max flex justify-center items-center group-hover:opacity-100 group-hover:visible transition-all duration-300  absolute p-2 bg-sky-950 rounded-lg -top-full left-[50%] -translate-x-1/2 " + (props.position=="top" ? '-top-full':props.position=="right" ? 'right:0':'') }
    >
      <span className="text-white text-xs">{props.text}</span>
      <span
        className="absolute top-8 left-9 border-8 border-transparent
       border-t-sky-950"
      ></span>
    </div>
  );
});

export default Tooltip;
