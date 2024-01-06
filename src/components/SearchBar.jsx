export default function SearchBar() {
  return (
    <div className="md:h-[3.5rem] h-[3rem] flex items-center mt-6">
      {/* <button className="h-full bg-rose-600 px-4">Get Started</button> */}
      <div className="h-full flex-1 bg-white rounded overflow-hidden flex items-center">
        <input
          className="h-full w-full bg-transparent border-none focus:outline-none focus:border-none px-4"
          type="search"
          placeholder="Enter your Index No"
        />
        <button className="h-full bg-rose-600 px-4">Check</button>
      </div>
    </div>
  );
}
