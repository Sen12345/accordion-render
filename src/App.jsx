import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";

/*This is the main App component, it manages the state of the questions and passes them down to the Questions component */

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="main">
      <Questions questions={questions} />
    </main>
  );
};
export default App;
