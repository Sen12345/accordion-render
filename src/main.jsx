import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Alternative from "./AlternativeSetup";

/*
  This is the main entry point for the React application.

  The application delivers an intuitive and visually appealing
  user interface, providing a smooth user experience.

  It renders a list of questions using the SingleQuestion
  component as the accordion with expandable sections
  that allow users to view or hide answers interactively.

  There is an alternative setup using the `AlternativeSetup`
  component that demonstrates a different approach to managing
  the state of the questions, allowing only
  one question to be expanded at a time.

  To render the alternative setup, simply switch the component
  being rendered in the ReactDOM.createRoot method from <App />
  to <AlternativeSetup />. Then follow the instructions in the
  respective component files (Questions.jsx and SingleQuestion.jsx)
  to see the differences in functionality
  and implementation.

  This project is designed to be a simple yet effective demonstration
  of the React useState hook and component-based architecture,
  including concepts such as prop drilling,vanilla css and array mapping.

  It shows how to effectively display data from an array of objects
  onto a webpage in a clean and reusable way, making it easier for
  other developers to understand and implement similar patterns
  in their own React projects.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AlternativeSetup /> */}
    <App />
  </React.StrictMode>,
);
