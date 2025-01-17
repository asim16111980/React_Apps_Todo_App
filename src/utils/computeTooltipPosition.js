// Function to compute tooltip position relative its parent (top, right, bottom or left)
const computeTooltipPosition = (viewport, parentRef, tooltipRef) => {
  const viewportWidth = viewport.innerWidth;
  const viewportHeight = viewport.innerHeight;
  const parentClientRect = parentRef.current.getBoundingClientRect();
  const tooltipClientRect = tooltipRef.current.getBoundingClientRect();

  if (parentClientRect.top > tooltipClientRect.height + 16) {
    return "top";
  } else if (
    viewportWidth - parentClientRect.right >
    tooltipClientRect.width + 16
  ) {
    return "right";
  } else if (
    viewportHeight - parentClientRect.bottom >
    tooltipClientRect.height + 16
  ) {
    return "bottom";
  } else if (parentClientRect.left > tooltipClientRect.width + 16) {
    return "left";
  }
};

export default computeTooltipPosition;
