import "./About.css";
import { Canvas } from "@react-three/fiber";
import Dither from "../Dither";

function Upcoming() {
  return (
    <section className="section-upcoming">
      <section className="section-upcoming-a">
        <div className="text-upcoming">
          <p className="p-upcoming-2">
            Strakplan is een vijfkoppige band met een Nederlandstalig
            repertoire. Ze brengen een frisse blik op de Nederpop zoals we die
            kennen uit de jaren ’80. Het eigen repertoire varieert van reggae
            tot dansbare ska, maar ze spelen ook bekende klassiekers om mee te
            zingen. Strakplan laat het horen!
          </p>
          <a href="mailto:strakplanmuziek@gmail.com?subject=Boeking%20Strakplan">
            <button className="button-strak">Boek ons</button>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Upcoming;
