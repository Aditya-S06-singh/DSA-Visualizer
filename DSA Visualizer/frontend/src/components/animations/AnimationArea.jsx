/*
|--------------------------------------------------------------------------
| AnimationArea.jsx
|--------------------------------------------------------------------------
|
| This component is the drawing canvas of our DSA Visualizer.
|
| Every animation in this project will happen inside this SVG.

| We are choosing SVG because it allows smooth animations,
| scalable graphics, and precise positioning.
|
*/

function AnimationArea() {

  return (

    <div className="panel animation-panel">

      {/* Section title */}
      <h2>Animation</h2>

      {/* SVG Canvas */}
      <svg
        className="animation-canvas"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
      >

        {/* Background of drawing area */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="600"
          rx="15"
          fill="#fafafa"
          stroke="#d6d6d6"
          strokeWidth="3"
          strokeDasharray="10 8"
        />

        {/* Placeholder text */}
        <text
          x="600"
          y="300"
          textAnchor="middle"
          fontSize="30"
          fill="#94a3b8"
        >
          Ready For Animation
        </text>

      </svg>

    </div>

  );

}

export default AnimationArea;