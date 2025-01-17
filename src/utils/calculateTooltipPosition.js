// Function to calculate tooltip position relative its parent (top, right, bottom or left)
const calculateTooltipPosition = (parentRef) => {
    const parentClientRect = parentRef.current.getBoundingClientRect();
    console.log(parentClientRect);
  if (parentClientRect.top > 50) {
    return "top";
  } else if (parentClientRect.right > 100) {
    return "right";
  } else if (parentClientRect.bottom > 50) {
    return "bottom";
  } else if (parentClientRect.left > 100) {
    return "left";
  }
};

export default calculateTooltipPosition;
