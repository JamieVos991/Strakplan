import "./App.css";
import Silk from "./components/Reactbits/Silk/silk";
import About from "./components/About/About";
import Upcoming from "./components/Upcoming/Upcoming";
import Between from "./components/Spacer/Spacer";
import Contact from "./components/Contact/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutUpper from "./components/About/AboutUpper";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return children;
}

function MainPage() {
  const [vinylLoaded, setVinylLoaded] = useState(false);

  return (
    <>
      {/* Everything you had before stays here */}
      <div className="hero-wrapper">
        <div className="hero-background">
          <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="hero-text-container">
          <div>
            <p className="title-main">Strak</p>
            <p className="title-main plan">Plan</p>
            <p className="title-sub">Muziek.</p>
          </div>

          <div className="info-block">
            <p className="subtitle lorem">
              wij maken muziek die blijft hangen. Met pakkende teksten, dansbare
              ritmes en een vette knipoog naar de jaren ’80 Nederpop, zet deze
              vierkoppige band elke zaal op z’n kop.
            </p>
            <img className="img-star" src="/bijlagen/star.webp" alt="star" />
            <div className="img-vinyl-wrapper">
              <img
                loading="eager"
                className={`img-vinyl ${vinylLoaded ? "loaded" : ""}`}
                src="bijlagen/vinyl-2.webp"
                alt="vinyl"
                onLoad={() => setVinylLoaded(true)}
              />
            </div>
            <p className="subtitle coordinates">5230.0102, N, 00544.8849, E</p>
          </div>
        </div>
      </div>

      <div className="spotify-section">
        <iframe
          className="spotify-embed"
          src="https://open.spotify.com/embed/artist/75MsKtOdFkYbNe6hOeeitD"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <Between />
      <Upcoming />
      <AboutUpper />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
