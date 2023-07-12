export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between py-24 px-8 md:p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-bold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500">
          🌱 Jonathan&apos;s Garden 🌱
        </h1>
        <div className="text-lg md:text-lg">
          <p>
            I&apos;m a product engineer interested in learning,
            decentralization, and tools for thought.
          </p>
        </div>
      </div>
    </main>
  );
}
