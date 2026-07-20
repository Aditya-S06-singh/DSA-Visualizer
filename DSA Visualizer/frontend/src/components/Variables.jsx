/*
|--------------------------------------------------------------------------
| Variables.jsx
|--------------------------------------------------------------------------
|
| Purpose
| -------
| This component displays the current values of important variables while
| the animation is running.
|
| During an animation, the backend will send updated values after each
| step. React will re-render this panel so users can clearly see how
| variables change.
|
| Example:
|
| Step 1
| Head -> null
|
| Step 2
| Head -> Node(10)
|
| Step 3
| Tail -> Node(10)
|
| Step 4
| Size -> 1
|
| This panel will eventually become dynamic, but for now we are using
| placeholder values to design the interface.
|
*/

import "./Variables.css";

function Variables() {

  // Placeholder values.
  // Later these will come from React state.
  const variables = [
    { name: "Head", value: "null" },
    { name: "Tail", value: "null" },
    { name: "Current", value: "null" },
    { name: "Previous", value: "null" },
    { name: "Size", value: "0" }
  ];

  return (
    <div className="panel">

      <h2>Variables</h2>

      <div className="variables-container">

        {variables.map((variable) => (

          <div
            key={variable.name}
            className="variable-card"
          >

            <span className="variable-name">
              {variable.name}
            </span>

            <span className="variable-value">
              {variable.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );

}

export default Variables;