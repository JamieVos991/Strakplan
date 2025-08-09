import "./Contact.css";
import { Link } from "react-router-dom";

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
      <div className="contact-content">
        <div className="contact-image"></div>
        <div className="contact-info">
          <div className="contact-box contact-box-border">
            <h2>Contact</h2>
            <p>
              <a href="mailto:info@strakplanmuziek.nl">
                info@strakplanmuziek.nl
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h2>Band</h2>
            <div className="contact-links">
              <a href="https://www.instagram.com/oliver_wester">
                Oliver Wester
              </a>
              <a href="https://www.instagram.com/perbeld_">Per Beld</a>
              <a href="https://www.instagram.com/barthoogendijk_">
                Bart Hoogendijk
              </a>
              <p>Cas van der Linden</p>
            </div>
          </div>
          <div className="contact-box">
            <h2>Stalk ons</h2>
            <div className="contact-links">
              <a
                href="https://www.instagram.com/strakplanmuziek/"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://open.spotify.com/artist/75MsKtOdFkYbNe6hOeeitD"
                target="_blank"
              >
                Spotify
              </a>
            </div>
          </div>
          <div className="contact-box contact-box-border-alt">
            <h2>Website</h2>
            <div className="contact-links">
              <p>Start</p>
              <p>Shows</p>
              <p>About</p>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
