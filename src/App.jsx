import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Silk from "./components/Silk";
import Upcoming from "./components/Upcoming/Upcoming";
import TextPressure from "./components/Textpressure";

function App() {
  return (
    <>
      <Navigation />
      <div className="silk-title">
        <div style={{ position: "relative", height: "" }}>
          <TextPressure
            text="Strak plan muziek"
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="black"
            strokeColor="#ff0000"
            minFontSize={200}
          />
        </div>
        <p className="silk-p">Band van alle markten</p>
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
      <Upcoming />
    </>
  );
}

export default App;
