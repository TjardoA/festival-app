"use client";

import newsData from "../data/home.json";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8 overflow-y-auto h-6/6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold uppercase leading-tight">
          Welkom bij <br />
          <span className="text-5xl text-purple-600 dark:text-purple-400">
            U Festival 2025
          </span>
        </h1>

        {/* Nieuwsitems */}
        <div className="space-y-6">
          {newsData &&
            Object.values(newsData).map((item, index) => (
              <div
                key={index}
                className="text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm"
              >
                <h2 className="font-semibold text-purple-600 dark:text-purple-400 text-md">
                  {item.title.nl}
                </h2>
                <p className="text-sm text-gray-800 dark:text-gray-200 mt-1">
                  {item.description.nl}
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
