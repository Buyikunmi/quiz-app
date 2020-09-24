import React, { Component } from "react";

import Question from "./question";
import Button from "./button";

class Quiz extends Component {
  state = {
    currentQuestion: {
      id: 1,
      category: "General Knowledge",
      type: "multiple",
      question:
        "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
      correct_answer: "Richard Branson",
      incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"],
    },
    selectedAnswer: "",
    questionList: [
      {
        id: 1,
        category: "General Knowledge",
        type: "multiple",
        question:
          "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
        correct_answer: "Richard Branson",
        incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"],
      },
      {
        id: 2,
        category: "General Knowledge",
        type: "multiple",
        question:
          "Which company did Valve cooperate with in the creation of the Vive?",
        correct_answer: "HTC",
        incorrect_answers: ["Oculus", "Google", "Razer"],
      },
      {
        id: 3,
        category: "General Knowledge",
        type: "multiple",
        question:
          "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
        correct_answer: "Demolition",
        incorrect_answers: [
          "The Dream Team",
          "The Bushwhackers",
          "The British Bulldogs",
        ],
      },
      {
        id: 4,
        category: "General Knowledge",
        type: "multiple",
        question:
          "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        correct_answer: "Key",
        incorrect_answers: ["Sword", "Pen", "Cellphone"],
      },
    ],
  };
  buttons = ["Previous", "Next"];

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
    const { questionList, currentQuestion } = this.state;

    return (
      <div className="border shadow-sm border-success rounded container mt-5">
        <div className="m-4">
          <div id="questions">
            <Question data={currentQuestion} />
          </div>
          <div className="clearfix mt-2">
            {this.buttons.map((buttonType) => (
              <Button
                currentQuestion={currentQuestion}
                totalCount={questionList.length}
                buttonType={buttonType}
                changeQuestion={(data, btnType) =>
                  this.changeQuestion(currentQuestion, buttonType)
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;

{
  /* {this.buttons.map((buttonType) => (
              <Button
                key={buttonType}
                buttonType={buttonType}
                currentQuestion={currentQuestion}
                totalCount={questionList.length}
                changeQuestion={() =>
                  this.changeQuestion(currentQuestion, buttonType)
                }
              />
            ))} */
}
