import React from "react";
import Button from "./button";

const ButtonGroup = ({ currentQuestion, totalCount, changeQuestion }) => {
  const buttons = ["Previous", "Next"];
  return (
    <div className="clearfix mt-2">
      {buttons.map((buttonType) => (
        <Button
          key={Math.random()}
          currentQuestion={currentQuestion}
          totalCount={totalCount}
          buttonType={buttonType}
          changeQuestion={(data, btnType) =>
            changeQuestion(currentQuestion, buttonType)
          }
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
