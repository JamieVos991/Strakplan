import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function Dashboard() {
  const [form, setForm] = useState({
    time: "",
    place: "",
    txt: "",
    date_day: "",
    day_month: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "shows"), {
      time: form.time,
      place: form.place,
      txt: form.txt,
      date_day: Number(form.date_day),
      day_month: form.day_month,
    });
    alert("Show added!");
    setForm({ time: "", place: "", txt: "", date_day: "", day_month: "" });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          placeholder="Place"
          value={form.place}
          onChange={(e) => setForm({ ...form, place: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.txt}
          onChange={(e) => setForm({ ...form, txt: e.target.value })}
        />
        <input
          placeholder="Date number"
          type="number"
          value={form.date_day}
          onChange={(e) => setForm({ ...form, date_day: e.target.value })}
        />
        <input
          placeholder="Month"
          value={form.day_month}
          onChange={(e) => setForm({ ...form, day_month: e.target.value })}
        />
        <button type="submit">Add Show</button>
      </form>
    </div>
  );
}

export default Dashboard;
