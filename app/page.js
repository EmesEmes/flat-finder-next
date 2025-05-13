"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const getFlats = async () => {
      const response = await fetch("http://localhost:8080/flats");
      const flats = await response.json();
      if (flats.success) {
        setFlats(flats.data);
      } else {
        setFlats([]);
      }
    };
    getFlats();
  }, []);
  console.log(flats);
  return (
    <section className="container mx-auto">
      <h3 className="text-3xl text-center my-8">All <span className="text-[#FF4900]">Flats</span></h3>
      <div className="grid grid-cols-3 gap-8">
        {flats.map((flat) => {
          return (
            <div
              key={flat._id}
              className="border-2 border-[#FF4900] p-4 rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <p className="text-2xl text-[#FF4900] font-bold ">{flat.city}</p>
              <p>{flat.streetName}</p>
              <p>${flat.rentPrice}</p>
              <p>{flat.dateAvailable}</p>
              <p>{flat._id}</p>
              <button className="px-4 py-2 rounded-lg bg-[#FF4900]"><a href={`/flat/${flat._id}`} className="text-white">View</a></button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
