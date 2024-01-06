export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="md:h-16 h-9 mr-2">
        <img src={process.env.PUBLIC_URL + "/images/educa.png"} alt="" />
      </div>
      <span className="md:text-2xl text-xl">eResult</span>
    </div>
  );
}
