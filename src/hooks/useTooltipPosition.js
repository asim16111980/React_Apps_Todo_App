import { useLayoutEffect, useState } from "react";
import computeTooltipDirection from "../utils/computeTooltipDirection";

// This hook return tooltip position state
const useTooltipPosition = (parentRef, tooltipRef) => {
  const [tooltipPosition, setTooltipPosition] = useState({
    direction: "",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  useLayoutEffect(() => {
    const parentClientRect = parentRef.current.getBoundingClientRect();
    const tooltipClientRect = parentRef.current.getBoundingClientRect();
    const direction = "right";
    // computeTooltipDirection(window, parentRef, tooltipRef);
    const position = { top: 0, right: 0, bottom: 0, left: 0 };
    switch (direction) {
      case "top":
        {
          position.top = parentClientRect.top - tooltipClientRect.height;
          position.left = parentClientRect.left - (tooltipClientRect.width / 4);
        }
        break;
      case "right": {
        position.top = parentClientRect.top - (tooltipClientRect.height/4);
        position.left = parentClientRect.right;
      }
        break;
      case "bottom":
        break;

      default:
        break;
    }
    console.log(position.top,parentClientRect.top,direction);
    setTooltipPosition({
      direction: direction,
      top:position.top,
      right: parentClientRect.right,
      bottom: parentClientRect.bottom,
      left: position.left,
    });
  }, [parentRef, tooltipRef]);
  return tooltipPosition;
};

export default useTooltipPosition;
