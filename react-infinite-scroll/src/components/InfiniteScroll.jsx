import React, { useEffect, useState } from 'react'
import Post from './Post'

const InfiniteScroll = () => {
  const [data, setData] = useState([])
  console.log("Data", data);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=3`).then((res) => {
      console.log("Response", res);
      return res.json();
    }).then((arr) => setData((oldData) => [...oldData, ...arr]))
  }, [pageNumber])

  return (
    <div>
      <Post data={data} setPageNumber={setPageNumber} />
    </div>
  )
}

export default InfiniteScroll