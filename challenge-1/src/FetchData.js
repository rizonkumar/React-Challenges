import React, { useEffect, useState } from "react";

const FetchData = () => {
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

      // update state witht the fetched data
      setData(data);

      // setloading to false since data fetching is complete
      setLoading(false);

      console.log(data);
    } catch (error) {
      console.log("Error fetching data" + error);
    }
  };
  return (
    <div>
      {loading ? (
        <p>Data is loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Username: {item.username}</p>
              <p>Email: {item.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
