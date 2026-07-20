import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import AnimationArea from "./components/AnimationArea";
import Variables from "./components/Variables";
import Console from "./components/Console";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="app">

      {/* Top navigation bar */}
      <Navbar />

      {/* Main workspace */}
      <main className="main">

        {/* Left side contains editor + animation */}
        <section className="left-panel">

          <Editor />

          <AnimationArea />

        </section>

        {/* Right side contains variables + console */}
        <section className="right-panel">

          <Variables />

          <Console />

        </section>

      </main>

      {/* Animation controls */}
      <Controls />

    </div>
  );
}

export default App;