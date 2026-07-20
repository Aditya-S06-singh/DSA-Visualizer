/*
|--------------------------------------------------------------------------
| Controls.jsx
|--------------------------------------------------------------------------
|
| Purpose
| -------
| This component contains all the controls required to manage the
| visualization.
|
| Initially these buttons do not perform any actions.
| Their purpose right now is to complete the UI.
|
| Later these buttons will control the animation engine.
|
| Future Features
| ---------------
|
| ▶ Play
|     Starts or resumes the animation.
|
| ⏸ Pause
|     Stops the animation at the current step.
|
| ⏮ Previous
|     Goes back one animation step.
|
| ⏭ Next
|     Moves forward one animation step.
|
| ⚡ Speed
|     Changes animation speed.
|
| 🔄 Reset
|     Restores the visualizer to its initial state.
|
*/

import "./Controls.css";

function Controls() {

  return (

    <footer className="controls">

      {/* Play Button */}
      <button className="control-btn play">
        ▶ Play
      </button>

      {/* Pause Button */}
      <button className="control-btn pause">
        ⏸ Pause
      </button>

      {/* Previous Step */}
      <button className="control-btn">
        ⏮ Prev
      </button>

      {/* Next Step */}
      <button className="control-btn">
        ⏭ Next
      </button>

      {/* Animation Speed */}
      <div className="speed-control">

        <label htmlFor="speed">
          Speed
        </label>

        <select id="speed" defaultValue="1x">

    <option>0.5x</option>
    <option>1x</option>
    <option>1.5x</option>
    <option>2x</option>
    <option>3x</option>

</select>

      </div>

      {/* Reset */}
      <button className="control-btn reset">
        🔄 Reset
      </button>

    </footer>

  );

}

export default Controls;