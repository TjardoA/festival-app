"use client";

import { useState } from "react";
import setlistData from "../data/setlist.json";

const START_TIME = 10 * 60;
const BLOCK_MINUTES = 15;
const TOTAL_BLOCKS = 56;

function timeToBlock(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;
  return Math.floor((totalMinutes - START_TIME) / BLOCK_MINUTES);
}

function durationToBlocks(minutes) {
  return Math.ceil(minutes / BLOCK_MINUTES);
}

export default function SetList() {
  const [selectedDay, setSelectedDay] = useState("saturday");
  const stages = Object.entries(setlistData.setlist[selectedDay]);

  const timeLabels = Array.from({ length: TOTAL_BLOCKS }, (_, i) => {
    const minutes = START_TIME + i * BLOCK_MINUTES;
    const hour = Math.floor(minutes / 60);
    const min = minutes % 60;
    return `${hour}:${min.toString().padStart(2, "0")}`;
  });

  return (
    <div className="flex flex-col items-center w-full px-4 py-6 space-y-4 overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Day selector */}
      <div className="flex space-x-4">
        {["saturday", "sunday"].map((day) => (
          <button
            key={day}
            className={`px-4 py-2 rounded-full shadow-md transition-colors ${
              selectedDay === day
                ? "bg-[#F03228] text-white"
                : "bg-white text-black dark:bg-gray-800 dark:text-white"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day === "saturday" ? "Saturday" : "Sunday"}
          </button>
        ))}
      </div>

      {/* Main horizontal scroll area */}
      <div className="w-full overflow-x-auto">
        <div
          className="grid"
          style={{
            gridTemplateRows: `40px repeat(${stages.length}, 60px)`,
            gridTemplateColumns: `80px repeat(${TOTAL_BLOCKS}, 80px)`,
            minWidth: `${TOTAL_BLOCKS * 80 + 80}px`,
          }}
        >
          {/* Top-left corner: empty */}
          <div className="border-b border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" />

          {/* Time headers */}
          {timeLabels.map((label, i) => (
            <div
              key={`time-${i}`}
              className="border-b border-r border-gray-300 dark:border-gray-700 text-xs font-semibold flex items-center justify-center bg-white dark:bg-gray-800"
            >
              {label}
            </div>
          ))}

          {/* Stage names */}
          {stages.map(([stageName], i) => (
            <div
              key={`stage-${i}`}
              className="border-b border-r border-gray-300 dark:border-gray-700 text-sm font-semibold flex items-center justify-center bg-gray-100 dark:bg-gray-800"
              style={{ gridRowStart: i + 2, gridColumnStart: 1 }}
            >
              {stageName}
            </div>
          ))}

          {/* Artist blocks */}
          {stages.map(([stageName, artistList], stageIndex) => {
            const row = stageIndex + 2;
            const artists = Object.values(artistList);

            return artists.map((artist, index) => {
              const colStart = timeToBlock(artist.start_time) + 2;
              const colSpan = durationToBlocks(artist.total_time);

              return (
                <div
                  key={`${stageName}-${index}`}
                  style={{
                    gridColumnStart: colStart,
                    gridColumnEnd: colStart + colSpan,
                    gridRowStart: row,
                  }}
                  className="bg-blue-600 text-white text-xs rounded-md px-2 py-1 m-1 flex items-center justify-center shadow-md"
                >
                  {artist.name}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}
