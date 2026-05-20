import React from "react";
import SingleQuestion from "./SingleQuestion";
/* 
To render alternative setup, uncomment the following 
line bellow and comment the line below it 
*/
// const Questions = ({ title, info, questions, toggleQuestion, activeId }) => {
const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          /* 
To render alternative setup, uncomment the following 
line bellow and comment the line below it 
*/
          <SingleQuestion key={question.id} {...question} />
          //   <SingleQuestion
          //     key={question.id}
          //     {...question}
          //     activeId={activeId}
          //     toggleQuestion={toggleQuestion}
          //   />
        );
      })}
    </section>
  );
};

export default Questions;
