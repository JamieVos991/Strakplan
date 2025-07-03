import "./New.css";
import CircularText from "../CircularText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const shows = [
  {
    time: "21:00 PM – 22:30 PM",
    place: "De KoffieKamer – Utrecht",
    txt: "Een knusse koffiebar in een oud grachtenpand, populair bij studenten en creatieven. Een knusse koffiebar in een oud grachtenpand, populair bij studenten en creatieven.",
    date: "18",
    day: "vrijdag",
  },
  {
    time: "21:00 PM – 22:30 PM",
    place: "Bar & Bord – Rotterdam",
    txt: "Een moderne bistro met industriële look, ideaal voor shared dining en cocktails.",
    date: "19",
    day: "zaterdag",
  },
  {
    time: "21:00 PM – 22:30 PM",
    place: "Het Dorstig Hert – Arnhem",
    txt: "Een gezellige bruine kroeg met een flinke bierkaart en livemuziek op vrijdagavond. Een knusse koffiebar in een oud grachtenpand, populair bij studenten en creatieven. Een knusse koffiebar in een oud grachtenpand, populair bij studenten en creatieven.  ",
    date: "20",
    day: "zondag",
  },
  {
    time: "21:00 PM – 22:30 PM",
    place: "Noord & Noot – Groningen",
    txt: "Lunchzaak met lokale producten en akoestische optredens, gelegen in een levendige studentenwijk.",
    date: "21",
    day: "maandag",
  },
  {
    time: "21:00 PM – 22:30 PM",
    place: "Zilt & Zoet – Zandvoort",
    txt: "Restaurant aan zee met een vis- en dessertmenu, sfeervol en romantisch.",
    date: "22",
    day: "dinsdag",
  },
];

function New() {
  return (
    <>
      <section className="section-new">
        <div className="container">
          <div className="circles">
            <div className="circle">
              <CircularText
                text="STRAK*PLAN*MUZIEK*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
            <div className="circle other">
              <CircularText
                text="STRAK*PLAN*MUZIEK*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
          </div>
          <h1>
            Eerst v<span className="weight">o</span>lgende sh
            <span className="weight">o</span>ws
          </h1>
        </div>
        <div className="container-articles">
          <div className="show-list">
            {[...shows].reverse().map((show, index) => (
              <div className="show-item" key={index}>
                <div className="dates">
                  <p className="show-date">{show.date}</p>
                  <p className="show-day">
                    {show.day.slice(0, 1).toUpperCase() + show.day.slice(1, 3)}
                  </p>
                </div>
                {/* <p className="show-time">{show.time}</p> */}
                <p className="show-place">{show.place}</p>
                <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default New;
