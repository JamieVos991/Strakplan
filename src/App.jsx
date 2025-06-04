import "./App.css";
import Silk from "./components/silk";

function App() {
  return (
    <>
      <div className="silk-title">
        <h1 className="silk-h1">
          <span className="silk-line">Strak</span>
          <span className="silk-line">Plan</span>
        </h1>
        <p className="silk-p">Muziek</p>
      </div>
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
    </>
  );
}

export default App;
