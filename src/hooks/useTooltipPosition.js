import { useLayoutEffect, useState } from "react";
import computeTooltipPosition from "../utils/computeTooltipPosition";

// This hook return tooltip position state
const useTooltipPosition = (parentRef,tooltipRef) => {
  const [tooltipPosition, setTooltipPosition] = useState(null);
  useLayoutEffect(() => {
    setTooltipPosition(computeTooltipPosition(window,parentRef,tooltipRef));
  },[]);
  return tooltipPosition;
};

export default useTooltipPosition;
