import { useState, useContext, createContext, useEffect } from "react";
import axiosInstance from "../hooks/useAxios";

const contextApi = createContext();

export default function CotextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchData() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/products/reservation").then(
          (res) => res
        );
        if (isMuted) {
        }
      } catch (error) {
        setMessage("Message");
      } finally {
        setIsLoading(false);
      }
    }

    // fetchData();

    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getResults = (index, centerIndex) => {};

  const values = {
    isLoading,
    message,
    getResults,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useContextApi = () => useContext(contextApi);
