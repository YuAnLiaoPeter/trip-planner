import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon bug in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locationCoords = {
  "Newark Airport": [40.6895, -74.1745],
  Hoboken: [40.744, -74.0324],
  "Liberty Island": [40.6892, -74.0445],
  "Battery Park": [40.7033, -74.017],
  "Wall Street": [40.7074, -74.0113],
  "Chinatown, Manhattan": [40.7158, -73.997],
  "Central Park": [40.7851, -73.9683],
  "The Met, Upper East Side": [40.7794, -73.9632],
  "Upper East Side": [40.7736, -73.9566],
  "The High Line": [40.748, -74.0048],
  "Times Square": [40.758, -73.9855],
  "Fifth Avenue": [40.7736, -73.9653],
  Broadway: [40.759, -73.9845],
  "Brooklyn Bridge": [40.7061, -73.9969],
  "DUMBO, Brooklyn": [40.7033, -73.9894],
  "Brooklyn Bridge Park": [40.7024, -73.9961],
  Brooklyn: [40.6782, -73.9442],
  "Upper West Side": [40.787, -73.9754],
  "Lincoln Center": [40.7725, -73.9835],
  "Hudson Valley, NY": [41.7004, -73.9209],
  "Catskill Mountains": [42.1948, -74.2923],
  "Woodstock, NY": [42.0409, -74.1168],
  "Midtown Manhattan": [40.7549, -73.984],
  "Rockefeller Center": [40.7587, -73.9787],
  "Koreatown, Manhattan": [40.7484, -73.9888],
  "Liberty State Park, NJ": [40.7005, -74.0645],
  "Jersey City, NJ": [40.7178, -74.0431],
  "Hoboken, NJ": [40.744, -74.0324],
  "Flushing, Queens": [40.7675, -73.833],
  "Corona Park, Queens": [40.7466, -73.8454],
  Manhattan: [40.7831, -73.9712],
  "Liberty State Park": [40.7005, -74.0645],
  Chinatown: [40.7158, -73.997],
  "The Met": [40.7794, -73.9632],
  "Central Park": [40.7851, -73.9683],
};

function TripMap({ days }) {
  const locations = [];

  days.forEach((day) => {
    day.activities.forEach((activity) => {
      const coords = locationCoords[activity.location];
      if (coords) {
        locations.push({
          name: activity.name,
          location: activity.location,
          coords,
          day: day.day,
        });
      }
    });
  });

  return (
    <div className="max-w-2xl mx-auto px-4 pb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">🗺️ 地圖總覽</h2>
      <div
        className="rounded-2xl overflow-hidden shadow-md"
        style={{ height: "400px" }}
      >
        <MapContainer
          center={[40.7549, -73.984]}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {locations.map((loc, index) => (
            <Marker key={index} position={loc.coords}>
              <Popup>
                <strong>第 {loc.day} 天</strong>
                <br />
                {loc.name}
                <br />
                📍 {loc.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default TripMap;
