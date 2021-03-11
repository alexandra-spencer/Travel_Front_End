import React from "react";

function MoreButton({ onClickMore }) {
  return <div className="morebutton"><button className="ui pink basic button" onClick={onClickMore}>View More Countries</button></div>
}

export default MoreButton;