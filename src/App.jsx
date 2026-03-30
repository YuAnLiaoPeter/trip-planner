import "./App.css";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import DayCard from "./components/DayCard";
import trips from "./data/trips";

function App() {
  const trip = trips.parents;

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
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
