import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Test() {
  const url = "https://75da-121-66-139-243.ngrok.io/motd";
  const [data, setData] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    register(data);
  };

  function register(item: any) {
    console.log("register(item) : " + item);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "id": item }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("res : " + res);
          return res.json();
        }
      }).then((res) => {console.log(res);}
        
      )
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={data || ""}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">전송</button>
      </form>
    </>
    
  );
}
