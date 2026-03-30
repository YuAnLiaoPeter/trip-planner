import { useState, useEffect } from "react";

function Countdown({ arrivalDate, guestName }) {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const arrival = new Date(arrivalDate);
    const diff = Math.ceil((arrival - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff);
  }, [arrivalDate]);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center py-16 px-8">
      <p className="text-slate-400 text-lg mb-2">距離</p>
      <h2 className="text-3xl font-semibold mb-6">{guestName} 抵達</h2>
      <div className="inline-block bg-white text-slate-900 rounded-2xl px-12 py-6">
        <span className="text-7xl font-bold">{daysLeft}</span>
        <p className="text-slate-500 text-xl mt-2">天</p>
      </div>
    </div>
  );
}

export default Countdown;
