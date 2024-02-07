import React, { useEffect, useState } from "react";

const FetchData = () => {
  //   const API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;
  //   const fetchUsers = async

  // store the fetched data
  const [data, setData] = useState([]);
  // to track if the data is still being fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // make API response
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>FetchData</div>;
};

export default FetchData;
