import React from "react";

const Button = ({
  changeQuestion,
  buttonType,
  currentQuestion: data,
  totalCount,
}) => {
  const buttonClass = `btn ${
    (data.id === totalCount && buttonType === "Next") ||
    (data.id === 1 && buttonType === "Previous")
      ? "invisible"
      : ""
  } btn-success float-${buttonType === "Previous" ? "left" : "right"}`;
  return (
    <React.Fragment>
      <button onClick={changeQuestion} className={buttonClass}>
        {buttonType === "Previous" && <i className="fa fa-arrow-left"></i>}{" "}
        {buttonType}{" "}
        {buttonType === "Next" && <i className="fa fa-arrow-right"></i>}
      </button>
    </React.Fragment>
  );
};

export default Button;
