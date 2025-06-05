"use client";

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
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm"
            >
              <h2 className="font-semibold text-purple-600 dark:text-purple-400 text-md">
                {item.title}
              </h2>
              <p className="text-sm text-gray-800 dark:text-gray-200 mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const newsItems = [
  {
    title: "🎤 Eerste artiesten bekend!",
    text: "Goldband, S10 en Son Mieux zijn bevestigd. Meer artiesten worden binnenkort aangekondigd.",
  },
  {
    title: "🎟️ Tickets bijna uitverkocht",
    text: "Early Bird-tickets zijn op. Regular tickets gaan hard – bestel op tijd.",
  },
  {
    title: "🚌 Shuttlebus update",
    text: "Extra pendelbussen vanaf Utrecht Centraal. Gratis voor alle bezoekers.",
  },
  {
    title: "🎪 Meer area's dan ooit",
    text: "Dit jaar: Chill Garden, Silent Disco, en Creators' Market. Nieuw en verrassend!",
  },
  {
    title: "🍔 Foodtruck line-up",
    text: "Van vegan opties tot wereldkeuken – voor ieder wat wils, ook halal & glutenvrij.",
  },
  {
    title: "🧾 Line-up schema binnenkort",
    text: "Binnenkort publiceren we de timetable zodat je je festivaldag kunt plannen.",
  },
];
