import Navbar from "./components/Navbar/Navbar";
import Editor from "./components/Editor/Editor";
import AnimationArea from "./animations/AnimationArea";
import Variables from "./components/Variables/Variables";
import Console from "./components/Console/Console";
import Controls from "./components/Controls/Controls";

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