"use client";

import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const iconConfigs = [
  { key: "entrance", url: "/marker_entrance_exit.svg", size: [100, 100] },
  { key: "stagePonton", url: "/marker_stage1_ponton.svg", size: [40, 40] },
  { key: "stageLake", url: "/marker_stage2_the_lake.svg", size: [40, 40] },
  { key: "stageClub", url: "/marker_stage3_the_club.svg", size: [40, 40] },
  { key: "stageHangar", url: "/marker_stage4_hangar.svg", size: [40, 40] },
  { key: "locker", url: "/marker_locker.svg" },
  { key: "food", url: "/marker_food.svg" },
  { key: "toilet", url: "/marker_toilet.svg" },
  { key: "bar", url: "/marker_bar.svg" },
  { key: "iceCream", url: "/marker_ice_cream.svg" },
  { key: "merchandise", url: "/marker_merchandise.svg" },
  { key: "firstAid", url: "/marker_first_aid.svg" },
];

const icons = Object.fromEntries(
  iconConfigs.map(({ key, url, size = [30, 30] }) => [
    key,
    new L.Icon({ iconUrl: url, iconSize: size }),
  ])
);

const markerData = [
  { position: [3025, 850], icon: "entrance" },
  { position: [7700, 2100], icon: "stagePonton", clickKey: "stage1" },
  { position: [4550, 3100], icon: "stageLake", clickKey: "stage2" },
  { position: [2900, 3300], icon: "stageClub", clickKey: "stage3" },
  { position: [950, 4650], icon: "stageHangar", clickKey: "stage4" },
  { position: [6800, 1050], icon: "locker" },
  { position: [7400, 1000], icon: "locker" },
  { position: [8600, 2000], icon: "food" },
  { position: [6350, 3200], icon: "food" },
  { position: [5000, 4000], icon: "toilet" },
  { position: [675, 4200], icon: "toilet" },
  { position: [9000, 1000], icon: "toilet" },
  { position: [8700, 1500], icon: "bar" },
  { position: [4900, 3350], icon: "bar" },
  { position: [2725, 4050], icon: "bar" },
  { position: [1850, 4100], icon: "bar" },
  { position: [7200, 1900], icon: "iceCream" },
  { position: [5900, 3325], icon: "iceCream" },
  { position: [3700, 3650], icon: "iceCream" },
  { position: [1600, 4500], icon: "iceCream" },
  { position: [3400, 3300], icon: "merchandise" },
  { position: [6725, 3375], icon: "merchandise" },
  { position: [7950, 1250], icon: "merchandise" },
  { position: [7975, 3900], icon: "firstAid" },
];

const bounds = [
  [0, 0],
  [9747, 5651],
];

function MarkerPopup({ onClose }) {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-xl z-50 flex flex-col gap-4 h-[30%]">
      <button
        onClick={onClose}
        className="w-10 h-10 border rounded-xl self-end text-black"
      >
        X
      </button>
      <div className="w-full h-full bg-red-500 rounded-xl" />
    </div>
  );
}

export default function MapView() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[90%] h-[90%] relative">
        <MapContainer
          crs={L.CRS.Simple}
          bounds={bounds}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          style={{ height: "100%", width: "100%" }}
          minZoom={-3}
          className="z-10"
        >
          <ImageOverlay url="/map.png" bounds={bounds} />
          {markerData.map(({ position, icon, clickKey }, i) => (
            <Marker
              key={i}
              position={position}
              icon={icons[icon]}
              eventHandlers={
                clickKey
                  ? { click: () => setSelectedMarker(clickKey) }
                  : undefined
              }
            />
          ))}
        </MapContainer>

        {selectedMarker === "stage1" && (
          <MarkerPopup onClose={() => setSelectedMarker(null)} />
        )}
      </div>
    </div>
  );
}
