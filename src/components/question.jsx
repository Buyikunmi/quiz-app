import React from "react";
import _ from "lodash";

const Question = ({
  data: { id, question, incorrect_answers, correct_answer },
}) => {
  return (
    <div>
      <h3 className="lead">
        Question Number <b>{id}</b>
      </h3>
      <h4 className="lead">{question}</h4>

      <div>
        {_.shuffle([...incorrect_answers, correct_answer]).map((answer) => (
          <li key={id + Math.random()} className="list-group-item">
            <input type="radio" name="answer" id={id + Math.random()} />
            <label htmlFor={id}>{answer}</label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Question;
