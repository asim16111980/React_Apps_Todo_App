import { useLayoutEffect, useState } from "react";
import calculateTooltipPosition from "../utils/calculateTooltipPosition";

// This hook return tooltip position state
const useTooltipPosition = (parentRef) => {
  const [tooltipPosition, setTooltipPosition] = useState(null);
  useLayoutEffect(() => {
    setTooltipPosition(calculateTooltipPosition(parentRef));
  },[parentRef]);
  return tooltipPosition;
};

export default useTooltipPosition;
