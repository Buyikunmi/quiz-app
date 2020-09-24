import React from "react";

const Button = ({
  changeQuestion,
  buttonType,
  currentQuestion: data,
  totalCount,
}) => {
  const buttonClass = `btn btn-info float-${
    buttonType === "Previous" ? "left" : "right"
  }`;
  return (
    <React.Fragment>
      <button
        onClick={(data, buttonType) => changeQuestion(data, buttonType)}
        className={buttonClass}
      >
        {buttonType === "Previous" && <i className="fa fa-arrow-left"></i>}{" "}
        {buttonType}{" "}
        {buttonType === "Next" && <i className="fa fa-arrow-right"></i>}
      </button>
    </React.Fragment>
  );
};

export default Button;
