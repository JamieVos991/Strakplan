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

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Helper: convert day_month (string) + date_day (number) to a Date object in the current year
      function getShowDate(show) {
        // Parse month from day_month, e.g. "August"
        const month = new Date(
          `${show.day_month} 1, ${today.getFullYear()}`
        ).getMonth();
        return new Date(today.getFullYear(), month, show.date_day);
      }

      const futureShows = showsArray.filter((show) => {
        const showDate = getShowDate(show);
        return showDate >= today;
      });

      const sortedShows = futureShows
        .sort((a, b) => {
          const dateA = getShowDate(a);
          const dateB = getShowDate(b);
          return dateA - dateB;
        })
        .slice(0, 5); // limit to 5 upcoming shows

      setShows(sortedShows);
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
