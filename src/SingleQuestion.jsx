import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = React.useState(false);
  /* 
To render alternative setup, uncomment the following 
line bellow and comment the line below it 
*/
  //   const isActive = activeId === id;
  const toggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {/* 
         To render alternative setup, uncomment the following line bellow and
        comment the line below it 
        */}
        {/* <button className="question-btn" onClick={() => toggleQuestion(id)}> */}
        <button className="question-btn" onClick={toggleInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
