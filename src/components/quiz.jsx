import React, { Component } from "react";
import _ from "lodash";

import Exam from "./exam";
import { getQuestions } from "./../services/quizService";

class Quiz extends Component {
  state = {
    options: [],
    selectedAnswer: "",
    questionList: getQuestions(),
  };
  componentWillMount() {
    const currentQuestion = this.state.questionList[0];
    const options = this.state.questionList.map((question, index) => {
      const { incorrect_answers, correct_answer } = question;
      return _.shuffle([...incorrect_answers, correct_answer]);
    });
    const answers = new Array(this.state.questionList.length);
    const result = 0;
    this.setState({ currentQuestion, options, answers, result });
  }

  submit = () => {
    const { answers, questionList } = this.state;
    const result = answers
      .map((selectedAnswer, index) => {
        return questionList[index].correct_answer === selectedAnswer;
      })
      .filter((answer) => !!answer).length;
    const showResult = true;
    this.setState({ result, showResult });
  };

  selectAnswer = (answer, questionIndex) => {
    const answers = [...this.state.answers].map((e, i) => {
      if (questionIndex === i) return answer;
      return e || false;
    });
    // console.log(answers);
    this.setState({ answers });
  };

  changeQuestion = (question, buttonType) => {
    const questionList = [...this.state.questionList];
    const index = questionList.findIndex((data) => data.id === question.id);
    const newQuestion =
      buttonType === "Previous"
        ? questionList[index - 1]
        : questionList[index + 1];

    this.setState({ currentQuestion: newQuestion });
  };

  render() {
    const {
      questionList,
      currentQuestion,
      options,
      answers,
      result,
      showResult,
    } = this.state;

    return (
      <div className=" border shadow-sm border-success rounded container mt-5">
        <div className="m-4">
          <Exam
            submit={this.submit}
            answers={answers}
            selectAnswer={this.selectAnswer}
            currentQuestion={currentQuestion}
            options={options}
            questionList={questionList}
            totalCount={questionList.length}
            changeQuestion={(data, btnType) =>
              this.changeQuestion(data, btnType)
            }
          />
          {!!showResult && (
            <div className="container my-50 shadow-sm">
              <h3 className="lead">
                You Scored {result} out of {questionList.length}
              </h3>
            </div>
          )}{" "}
        </div>
      </div>
    );
  }

  formatTimer = (timer) => {
    return `${Math.floor(timer / 60)}:${timer % 60}`;
  };
}

export default Quiz;

/*<Fragment>
<div id="questions">
  {answers.filter((e) => !!e).length >= 3 && (
    <button onClick={this.submit} className="btn btn-danger">
      Submit
    </button>
  )}

  <Question
    selectAnswer={this.selectAnswer}
    answerList={answers}
    data={currentQuestion}
    options={options[currentQuestion.id - 1]}
  />
</div>

<ButtonGroup
  currentQuestion={currentQuestion}
  totalCount={questionList.length}
  changeQuestion={(data, btnType) =>
    this.changeQuestion(data, btnType)
  }
/>
</Fragment>*/
