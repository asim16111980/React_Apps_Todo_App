// Function to compute tooltip direction relative its parent (top, right, bottom or left)
const computeTooltipDirection= (viewport, parentRef, tooltipRef) => {
  const viewportWidth = viewport.innerWidth;
  const viewportHeight = viewport.innerHeight;
  const parentClientRect = parentRef.current.getBoundingClientRect();
  const tooltipClientRect = tooltipRef.current.getBoundingClientRect();

  if (parentClientRect.top > tooltipClientRect.height) {
    return "top";
  } else if (viewportWidth - parentClientRect.right > tooltipClientRect.width) {
    return "right";
  } else if (
    viewportHeight - parentClientRect.bottom >
    tooltipClientRect.height
  ) {
    return "bottom";
  } else if (parentClientRect.left > tooltipClientRect.width) {
    return "left";
  }
};

export default computeTooltipDirection;
