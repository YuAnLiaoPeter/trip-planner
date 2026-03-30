import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import DayCard from "./components/DayCard";
import trips from "./data/trips";

function App() {
  const [selectedTrip, setSelectedTrip] = useState("parents");
  const trip = trips[selectedTrip];

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      {/* Trip Selector Buttons */}
      <div className="flex justify-center gap-4 bg-white py-4 shadow-sm">
        <button
          onClick={() => setSelectedTrip("parents")}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            selectedTrip === "parents"
              ? "bg-slate-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          👨‍👩‍👧 家人行程
        </button>
        <button
          onClick={() => setSelectedTrip("girlfriendMom")}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            selectedTrip === "girlfriendMom"
              ? "bg-slate-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          👩 女友媽媽行程
        </button>
      </div>

      <Countdown arrivalDate={trip.arrivalDate} guestName={trip.guestName} />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">🗓️ 行程總覽</h2>
        {trip.days.map((day) => (
          <DayCard
            key={day.day}
            day={day.day}
            title={day.title}
            emoji={day.emoji}
            activities={day.activities}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
