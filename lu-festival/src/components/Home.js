export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 space-y-6 text-center">
      {/* Welkomsttekst */}
      <h1 className="text-2xl font-bold uppercase">
        Welcome to <br />
        <span className="text-3xl text-purple-500">U Festival</span>
      </h1>

      {/* Eerste blok */}
      <div className="w-full max-w-sm h-32 rounded-xl border border-gray-300 bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <p className="text-white">[ Content Block 1 ]</p>
      </div>

      {/* Tweede blok */}
      <div className="w-full max-w-sm h-32 rounded-xl border border-gray-300 bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <p className="text-white">[ Content Block 2 ]</p>
      </div>
    </div>
  );
}
