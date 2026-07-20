import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* Left Section */}
      <div className="navbar-left">

        {/* Temporary logo.
            We will replace this with an SVG later. */}
        <div className="logo">
          DSA
        </div>

        <h1 className="title">
          DSA Visualizer
        </h1>

      </div>

      {/* Right Section */}
      <div className="navbar-right">

        {/* This button doesn't do anything yet.
            We'll connect it to the backend later. */}
        <button className="run-button">
          ▶ Run
        </button>

      </div>

    </header>
  );
}

export default Navbar;