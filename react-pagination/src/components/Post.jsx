import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data. Please try again later");
      }
    };
    fetchData();
  }, [pageNo]);

  return (
    <div className="container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <div className="post-container">
            {data.map((item, index) => {
              return <img src={item.download_url} key={index} />;
            })}
          </div>
          <Pagination pageNo={pageNo} setPageNo={setPageNo} />
        </>
      )}
    </div>
  );
};

export default Post;
