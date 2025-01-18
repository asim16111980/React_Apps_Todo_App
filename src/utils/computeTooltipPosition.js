// Function to compute tooltip position relative its parent (top, right, bottom or left)
const computeTooltipPosition = (viewport, parentRef, tooltipRef) => {
  const viewportWidth = viewport.innerWidth;
  const viewportHeight = viewport.innerHeight;
  const parentClientRect = parentRef.current.getBoundingClientRect();
  const tooltipClientRect = tooltipRef.current.getBoundingClientRect();
console.log(parentClientRect)
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

export default computeTooltipPosition;
