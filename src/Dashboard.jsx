import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const [form, setForm] = useState({
    time: "",
    place: "",
    date: "",
  });

  const [shows, setShows] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "shows"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShows(data);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.date) {
      alert("Please select a date");
      return;
    }

    const dateObj = new Date(form.date);
    const date_day = dateObj.getDate();
    const day_month = dateObj.toLocaleString("default", { month: "long" });

    if (editId) {
      await updateDoc(doc(db, "shows", editId), {
        time: form.time,
        place: form.place,
        date: form.date,
        date_day,
        day_month,
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, "shows"), {
        time: form.time,
        place: form.place,
        date: form.date,
        date_day,
        day_month,
      });
    }
    setForm({ time: "", place: "", date: "" });
  };

  const handleEdit = (show) => {
    setForm({
      time: show.time,
      place: show.place,
      date: show.date,
    });
    setEditId(show.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "shows", id));
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pastShows = shows.filter((show) => new Date(show.date) < today);
  const upcomingShows = shows.filter((show) => new Date(show.date) >= today);

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate("/")}>⬅ Go Back</button>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          style={{ background: "red", color: "white" }}
        >
          Log Out
        </button>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ flex: 1 }}>
          <h1>Dashboard</h1>
          <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <input
              placeholder="tijd"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
            <input
              placeholder="plek"
              value={form.place}
              onChange={(e) => setForm({ ...form, place: e.target.value })}
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
            <button type="submit">
              {editId ? "Save Changes" : "Add Show"}
            </button>
          </form>

          <h2>Upcoming Shows</h2>
          <ul>
            {upcomingShows.map((show) => (
              <li key={show.id} style={{ marginBottom: "1rem" }}>
                <strong>
                  {show.day_month} {show.date_day}
                </strong>{" "}
                – {show.time} @ {show.place}
                <br />
                <button onClick={() => handleEdit(show)}>Edit</button>
                <button
                  onClick={() => handleDelete(show.id)}
                  style={{ marginLeft: "0.5rem", color: "red" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Past Shows</h2>
          <ul>
            {pastShows.map((show) => (
              <li key={show.id} style={{ marginBottom: "1rem", opacity: 0.6 }}>
                <strong>
                  {show.day_month} {show.date_day}
                </strong>{" "}
                – {show.time} @ {show.place}
                <br />
                <button onClick={() => handleEdit(show)}>Edit</button>
                <button
                  onClick={() => handleDelete(show.id)}
                  style={{ marginLeft: "0.5rem", color: "red" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
