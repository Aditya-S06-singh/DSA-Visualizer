/*
|--------------------------------------------------------------------------
| Console.jsx
|--------------------------------------------------------------------------
|
| Purpose
| -------
| This component acts as the execution console for our DSA Visualizer.
|
| Instead of printing to the browser console (F12), every important event
| will be shown here so users can follow the execution visually.
|
| Examples:
|
| [INFO] Program Started
|
| [STEP 1]
| Creating first node...
|
| [STEP 2]
| Updating head pointer...
|
| [STEP 3]
| Connecting nodes...
|
| [SUCCESS]
| Linked List Created Successfully.
|
| Initially this console contains static messages.
| Later these messages will come directly from the backend while
| the animation is running.
|
*/

import "./Console.css";

function Console() {

  // Temporary log messages.
  // Later these will be stored inside React state and updated
  // after every animation step.
  const logs = [
    "[INFO] Waiting for program...",
    "",
    "Click the Run button to start the visualization."
  ];

  return (

    <div className="panel">

      <h2>Console</h2>

      <div className="console-box">

        {logs.map((log, index) => (

          <p
            key={index}
            className="console-line"
          >
            {log}
          </p>

        ))}

      </div>

    </div>

  );

}

export default Console;