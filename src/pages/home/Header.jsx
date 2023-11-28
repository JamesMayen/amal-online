import { useRef } from "react";
import Button from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header-container bg-primary/50 flex items-center justify-center md:h-[79vh] px-[10%] py-[5rem]">
        <div className="md:w-[85%] md:flex items-center text-white md:mb-0 mb-[3rem]">
          <div className="flex-1">
            <h1 className="md:text-6xl text-3xl font-bold">
              Minsitry of Education portal for result at home
            </h1>
          </div>
          <ReqFormContent cName="md:block hidden" />
        </div>
      </header>
      <ReqFormContent cName="md:hidden block mx-5 text-white mt-[-5rem]" />
    </>
  );
}

function ReqFormContent({ cName }) {
  const centerIndexRef = useRef();
  const studentIndexRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      centerIndexRef.current.value &&
      studentIndexRef.current.value &&
      phoneRef.current.value
    ) {
      const url = `/results?center-index=${centerIndexRef.current.value}&studentIndex=${studentIndexRef.current.value}&phone=${phoneRef.current.value}`;
      navigate(url);
    }
  };
  return (
    <div className={`${cName} md:w-[35%] rounded bg-primary p-7`}>
      <h1 className="text-2xl font-bold mb-5">Check your results</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-gray-700">
          <input
            className="h-[3rem] w-full px-4"
            type="text"
            placeholder="Center Index"
            ref={centerIndexRef}
            required
          />
        </div>
        <div className="text-gray-700 my-4">
          <input
            className="h-[3rem] w-full px-4"
            type="text"
            placeholder="Student Index"
            ref={studentIndexRef}
            required
          />
        </div>
        <div className="text-gray-700 mb-4">
          <input
            className="h-[3rem] w-full px-4"
            type="text"
            placeholder="Phone No"
            ref={phoneRef}
            required
          />
        </div>
        <Button text="Submit" cName="w-full" type="submit" />
      </form>
    </div>
  );
}
