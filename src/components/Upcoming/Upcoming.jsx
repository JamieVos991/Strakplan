import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Upcoming.css";
import CircularText from "../../components/Reactbits/CircularText/CircularText";

function New() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      const querySnapshot = await getDocs(collection(db, "shows"));
      const showsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShows(showsArray.sort((a, b) => b.date_day - a.date_day));
    }
    fetchShows();
  }, []);

  return (
    <section className="section-new">
      <div className="container">
        <div className="circles">
          <div className="circle">
            <CircularText
              text="STRAK*PLAN*MUZIEK*"
              onHover="speedUp"
              spinDuration={20}
            />
          </div>
          <div className="circle other">
            <CircularText
              text="STRAK*PLAN*MUZIEK*"
              onHover="speedUp"
              spinDuration={20}
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
          {shows.map((show) => (
            <div className="show-item" key={show.id}>
              <div className="dates">
                <p className="show-date">{show.date_day}</p>
                <p className="show-day">
                  {show.day_month.slice(0, 1).toUpperCase() +
                    show.day_month.slice(1, 3)}
                </p>
              </div>
              <p className="show-place">{show.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default New;
