import "./Contact.css";
import FallingText from "../FallingText";

function Contact() {
  return (
    <>
      <section className="section-contact">
        <div className="sectie-a">
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
        <div className="sectie-b">
          <div className="left"></div>
          <div className="right">
            <div className="box er">
              <div>
                <h2>Contact</h2>
              </div>
              <div>
                <p>
                  <a href="mailto:strakplanmuziek@gmail.com">
                    strakplanmuziek@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="box">
              <div>
                <h2>Band</h2>
              </div>
              <div>
                <p>Oliver</p>
                <p>Per</p>
                <p>Bart</p>
                <p>Cas</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h2>Stalk ons</h2>
              </div>
              <div>
                <p
                  href="https://www.instagram.com/strakplanmuziek/"
                  target="_blank"
                >
                  Instagram
                </p>
                <p
                  href="https://open.spotify.com/artist/75MsKtOdFkYbNe6hOeeitD"
                  target="_blank"
                >
                  Spotify
                </p>
              </div>
            </div>
            <div className="box re">
              <div>
                <h2>Website</h2>
              </div>
              <div>
                <p>Start</p>
                <p></p>
                <p>Shows</p>
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
