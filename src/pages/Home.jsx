import React, { useState, useEffect } from "react";
import axios from "axios";
import EventDescription from "../components/homeComponents/EventDescription";
import EventDetails from "../components/homeComponents/EventDetails";

const Home = () => {
  const [apiEndpoint, setApiEndPoint] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT_URI}`)
      .then((response) => {
        setApiEndPoint(response.data);
      })
      .catch((error) => {
        console.log("getting error while fetching the api", error);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-20">
        <EventDescription eventDesc={apiEndpoint} />
        <EventDetails eventDetails={apiEndpoint} />
      </div>
    </div>
  );
};

export default Home;
