import React from "react";

function MoreButton({ onClickMore }) {
  return <div className="morebutton"><button class="ui teal basic button" onClick={onClickMore}>View More Countries</button></div>

}

export default MoreButton;