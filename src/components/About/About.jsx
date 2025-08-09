import "./About.css";

function About() {
  return (
    <section className="upcoming-section">
      <section className="upcoming-inner">
        <div className="upcoming-content">
          <p className="upcoming-description">
            Strakplan is een vierkoppige band met een Nederlandstalig
            repertoire. Ze brengen een frisse blik op de Nederpop zoals we die
            kennen uit de jaren ’80. Het eigen repertoire varieert van reggae
            tot dansbare ska, maar ze spelen ook bekende klassiekers om mee te
            zingen. Strakplan laat het horen!
          </p>
          <a href="mailto:info@strakplanmuziek.nl?subject=Boeking%20Strakplan">
            <button className="btn-book">Boek ons</button>
          </a>
        </div>
      </section>
    </section>
  );
}

export default About;
