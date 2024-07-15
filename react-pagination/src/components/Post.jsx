import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => setData(res.data));
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, index) => {
          return <img src={item.download_url} key={index} />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
};

export default Post;
