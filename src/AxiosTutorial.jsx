import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosTutorial = () => {
  const [userData, setUserData] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users"
  let names
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setUserData(response.data);
      names = userData.data.map((data) => {
        return console.log(data);
      });
    }).catch((error) => {
      alert(error)
    })
  }, []);
  
  return (
    <>
      <div>
        Axios Tutorial
        {names}
      </div>
    </>
  );
};

export default AxiosTutorial;
