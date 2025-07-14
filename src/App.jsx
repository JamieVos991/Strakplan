import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Silk from "./components/Silk";
import About from "./components/About/About";
import TextPressure from "./components/Textpressure";
import Shop from "./components/Shop/Shop";
import Upcoming from "./components/Upcoming/Upcoming";
import Between from "./components/Spacer/Spacer";
import Contact from "./components/Contact/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutUpper from "./components/About/AboutUpper";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <div className="silk-title">
        <div style={{ position: "relative", padding: "0 40px", height: "" }}>
          <TextPressure
            text="Strak plan muziek"
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="white"
            strokeColor="#ff0000"
            minFontSize={200}
          />
        </div>
        <p className="silk-p">Band van alle markten</p>
      </div> */}
      <div className="silk-background-wrapper">
        <div className="silk-background">
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="container-silktext">
          <div>
            <p className="silk-p">Strak</p>
            <p className="silk-p plan">Plan</p>
          </div>

          <div className="extra-container">
            <p className="silk-p-extra lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              earum cupiditate.
            </p>
            <img className="img-star" src="/bijlagen/star.webp" alt="star" />
            <p className="silk-p-extra cordinates">
              5230.0102, N, 00544.8849, E
            </p>
          </div>

          <p className="silk-p-more">Muziek.</p>
        </div>

        <img className="silk-img" src="/bijlagen/vinyl.png" alt="vinyl" />
      </div>

      <div className="silk-backgroud">
        <div className="header-img">
          <iframe
            className="iframe-d"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/75MsKtOdFkYbNe6hOeeitD?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Between />
      <Upcoming />
      <AboutUpper />
      <About />
      {/* <Shop /> */}
      <Contact />
    </>
  );
}

export default App;
