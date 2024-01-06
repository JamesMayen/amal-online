import SearchBar from "../../components/SearchBar";

export default function Header() {
  return (
    <header
      className="md:h-[75vh] flex items-center md:px-[8%] px-4 md:py-0 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
          process.env.PUBLIC_URL + "/images/kids-learning3.jpg"
        })`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-[60%] text-center text-white">
        <h1 className="md:text-6xl text-3xl font-bold">Learn & share</h1>
        <p className="md:text-4xl">
          Your Learing is your duty for better future
        </p>
        <SearchBar />
      </div>
    </header>
  );
}
