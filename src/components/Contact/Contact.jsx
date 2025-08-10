import LightRays from "../Reactbits/LightRays/LightRays";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <svg width="100%" height="300" viewBox="0 0 1000 300">
          <defs>
            <path id="arcPath" d="M 100,250 Q 500,0 900,250" fill="none" />
          </defs>
          <text fill="black" fontSize="80" textAnchor="middle">
            <textPath href="#arcPath" startOffset="50%">
              Contact ons
            </textPath>
          </text>
        </svg>
      </div>

      <div className="contact-content" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#fff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <footer className="footer" style={{ position: "relative", zIndex: 1 }}>
          <div className="footer-top">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/shows">Shows</Link>
              <Link to="/about">About</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/">Shop</Link>
            </div>
            <p>
              <a className="mail" href="mailto:info@strakplanmuziek.nl">
                info@strakplanmuziek.nl
              </a>
            </p>
          </div>
          <div class="parent">
            <div class="a">
              <div className="links">
                <a
                  href="https://www.instagram.com/oliver_wester"
                  target="_blank"
                >
                  Oliver Wester
                </a>
                <a href="https://www.instagram.com/perbeld_" target="_blank">
                  Per Beld
                </a>
                <a
                  href="https://www.instagram.com/barthoogendijk_"
                  target="_blank"
                >
                  Bart Hoogendijk
                </a>
                <a href="https://www.instagram.com/vdlcas" target="_blank">
                  Cas van der Linden
                </a>
              </div>
            </div>
            <div class="b"></div>
            <div class="c">
              <a
                href="https://open.spotify.com/artist/75MsKtOdFkYbNe6hOeeitD"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "spotify"]} />
              </a>
              <a href="tel:+31612345678">
                <FontAwesomeIcon icon={["fas", "phone-volume"]} />
              </a>
              <a
                href="https://www.instagram.com/strakplanmuziek/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </div>
            <div class="d">
              <p>Privacy Verklaring</p>
              <p>
                {" "}
                © {new Date().getFullYear()} Strakplan Muziek. Alle rechten
                voorbehouden.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
