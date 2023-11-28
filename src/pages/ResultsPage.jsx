import { useSearchParams } from "react-router-dom";
import axiosInstance from "../hooks/useAxios";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [params] = useSearchParams();
  const centerIndex = params.get("center-index");
  const studentIndex = params.get("studentIndex");
  const phone = params.get("phone");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [messages, setMessage] = useState("");

  useEffect(() => {
    const getResults = async () => {
      if (!centerIndex && !studentIndex && !phone) return;
      const data = { centerIndex, studentIndex, phone };
      try {
        const results = await axiosInstance
          .post("/single", data)
          .then((res) => res);
        setData(results.data);
      } catch (error) {
        if (error?.response) {
          setMessage(error?.response.data);
        } else {
          setMessage("Something went wrong!");
        }
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [centerIndex, studentIndex, phone]);

  return (
    <div className="bg-white md:mx-[28%] mx-3 md:p-5 p-3 mt-4">
      <div className="">{isLoading && "Loading..."}</div>
      {messages && <div className="text-red-500">{messages}</div>}
      {data && (
        <div className="">
          <h3 className="text-xl font-bold text-center mb-8">
            Results of Secondary Education
          </h3>
          <div className="md:flex justify-between items-center mb-3">
            <div className="flex">
              <span className="font-semibold">Name of Canditate</span>
              <span className="ml-2">{data.studentName}</span>
            </div>
            <div className="flex">
              <span className="font-semibold">Index No:</span>
              <span className="ml-2"> {data.studentIndex}</span>
            </div>
          </div>
          <div className="md:flex justify-between items-center mb-3">
            <div className="flex">
              <span className="font-semibold">Name of School: </span>
              <span className="ml-3">Mahad Juba</span>
            </div>
            <div className="flex">
              <span className="font-semibold">Center No:</span>
              <span className="ml2"> {data.centerIndex}</span>
            </div>
          </div>
          {data && (
            <table className="w-full">
              <thead>
                <tr className="border text-left">
                  <td className="p-4">Subject</td>
                  <td className="p-4">Marks obtained</td>
                  <td className="p-4 text-right">Marks In words</td>
                </tr>
              </thead>
              <tbody>
                <tr className="border px-3">
                  <td className="p-3">Engilish</td>
                  <td className="p-3">{data.eng}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">Math</td>
                  <td className="p-3">{data.math}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">Christina Religion</td>
                  <td className="p-3">{data.cre}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">islamic</td>
                  <td className="p-3">{data.islamic}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">Physic</td>
                  <td className="p-3">{data.physic}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">Biology</td>
                  <td className="p-3">{data.biology}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
                <tr className="border px-3">
                  <td className="p-3">Arabic</td>
                  <td className="p-3">{data.arabic ? data.arabic : "---"}</td>
                  <td className="p-3 text-right">fifty</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="flex justify-between my-4">
            <div className="flex">
              <span className="font-bold">Full Marks =</span>
              <span className="ml-2">100%</span>
            </div>
            <div className="flex">
              <span className="font-bold">Results:</span>
              <span className="ml-2">Pass</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <span className="font-bold">Pass Marks =</span>
              <span className="ml-2">50%</span>
            </div>
            <div className="flex">
              <span className="font-bold">Percentage:</span>
              <span className="ml-2">75.5%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
