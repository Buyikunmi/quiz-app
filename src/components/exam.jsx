import React, { Fragment } from "react";
import ButtonGroup from "./buttonGroup";
import Question from "./question";

const Exam = ({
  answers,
  submit,
  currentQuestion,
  changeQuestion,
  totalCount,
  options,
  selectAnswer,
}) => {
  return (
    <Fragment>
      <div id="questions">
        {answers.filter((e) => !!e).length >= 3 && (
          <button onClick={submit} className="btn btn-danger">
            Submit
          </button>
        )}

        <Question
          selectAnswer={selectAnswer}
          answerList={answers}
          data={currentQuestion}
          options={options[currentQuestion.id - 1]}
        />
      </div>
      <ButtonGroup
        currentQuestion={currentQuestion}
        totalCount={totalCount}
        changeQuestion={changeQuestion}
      />{" "}
    </Fragment>
  );
};

export default Exam;
