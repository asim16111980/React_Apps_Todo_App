// Function to compute tooltip element position (top, right, bottom and left)
const getTooltipPosition = (parentRef, tooltipRef) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const parentClientRect = parentRef.current.getBoundingClientRect();
  const tooltipClientRect = tooltipRef.current.getBoundingClientRect();
  // Function to compute tooltip direction relative its parent (top, right, bottom or left)
  const computeTooltipDirection = () => {
    let direction = "top";
    if (parentClientRect.top < tooltipClientRect.height) {
      direction = "right";
      if (
        viewportWidth - parentClientRect.right <
        tooltipClientRect.width + 8
      ) {
        direction = "bottom";
        if (viewportHeight - parentClientRect.bottom < tooltipClientRect.height)
          direction = "left";
      }
    }
    return direction;
  };
  const direction = computeTooltipDirection(window, parentRef, tooltipRef);
  const position = {
    direction: direction,
    top: 0,
    left: 0,
  };
  switch (direction) {
    case "top":
      position.top = parentClientRect.top - tooltipClientRect.height + 8;
      position.left =
        parentClientRect.left +
        parentClientRect.width / 2 -
        tooltipClientRect.width / 2;
      break;
    case "right":
      position.top =
        parentClientRect.top +
        parentClientRect.height / 2 -
        tooltipClientRect.height / 2;
      position.left = parentClientRect.right - 8;
      break;
    case "bottom":
      position.top = parentClientRect.bottom - 8;
      position.left =
        parentClientRect.left +
        parentClientRect.width / 2 -
        tooltipClientRect.width / 2;
      break;
    default:
      position.top =
        parentClientRect.top +
        parentClientRect.height / 2 -
        tooltipClientRect.height / 2;
      position.left = parentClientRect.left - tooltipClientRect.width + 8;
      break;
  }
  return position;
};

export default getTooltipPosition;
