import React, { Fragment } from "react";

const Question = ({
  data: { id, question, incorrect_answers, correct_answer },
  options,
  answerList,
  selectAnswer,
}) => {
  const isSelected = (answer) => answerList[id - 1] === answer;
  return (
    <div>
      <h3 className="lead">
        Question Number <b>{id}</b> of <b>{answerList.length}</b>
      </h3>
      <h4 className="lead">{question}</h4>

      <div>
        {options.map((option) => (
          <Fragment key={id + Math.random()}>
            <div className="row mx-md-n5">
              <div className="col px-md-5">
                <div
                  onClick={() => selectAnswer(option, id - 1)}
                  className={`p-3 answer border ${
                    isSelected(option) ? "bg-warning" : "bg-light"
                  }`}
                >
                  <i
                    className={
                      isSelected(option)
                        ? "fa fa-check-circle"
                        : "fa fa-circle-o"
                    }
                  ></i>
                  &nbsp;&nbsp;&nbsp;
                  {option}
                </div>
              </div>
            </div>
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Question;

/* Schema of the JSON
question 1 : {
  _id : 'xrrezdeqweHjhkjh'
  question : 'What is the name of the fastest animal in the world'
  answers : ['Pereguine Falcon', 'Tiger', 'Sail Fish', 'Cheetah']
  correct_anser : 'Sail Fish'
}




*/
