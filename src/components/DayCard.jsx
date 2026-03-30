import { useState } from "react";

const typeColors = {
  food: "🍜",
  attraction: "🏛️",
  nature: "🌿",
  museum: "🖼️",
  transport: "🚗",
  shopping: "🛍️",
};

function DayCard({ day, title, emoji, activities }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-4">
      {/* Card Header - click to expand */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{emoji}</span>
          <div className="text-left">
            <p className="text-slate-400 text-sm">第 {day} 天</p>
            <h3 className="text-slate-800 font-semibold text-lg">{title}</h3>
          </div>
        </div>
        <span className="text-slate-400 text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Activities - shown when expanded */}
      {isOpen && (
        <div className="bg-slate-50 px-6 py-4 space-y-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-xl p-4 shadow-sm"
            >
              <span className="text-2xl">
                {typeColors[activity.type] || "📍"}
              </span>
              <div>
                <p className="text-slate-400 text-xs">{activity.time}</p>
                <p className="font-semibold text-slate-800">{activity.name}</p>
                <p className="text-slate-500 text-sm">{activity.location}</p>
                <p className="text-slate-400 text-sm mt-1">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DayCard;
