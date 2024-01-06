export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="md:h-16 h-10 mr-2">
        <img src={process.env.PUBLIC_URL + "/images/educa.png"} alt="" />
      </div>
      <span className="md:text-2xl text-xl text-rose-600 md:font-bold">
        SkillSprint
      </span>
    </div>
  );
}
