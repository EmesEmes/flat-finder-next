"use client"
import React, { useEffect, useState } from "react";

const FlatView = ({ params }) => {
  const [flat, setFlat] = useState("")
  const { id } = React.use(params);
 
  useEffect(()=> {
    const getFlat = async () => {
      const response = await fetch(`http://localhost:8080/flats/${id}`);
      const data = await response.json();
      setFlat(data.data)
    };
    getFlat();
  },[])
  console.log(flat)
  return <>
    <div className="container mx-auto">
      <p>{flat.city}</p>  
      <p>{flat.streetName}</p>
      <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={200} height={200} />
    </div> 
  </>;
};

export default FlatView;
