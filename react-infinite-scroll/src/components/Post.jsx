import React, { useEffect } from 'react'

const Post = ({data, setPageNumber}) => {

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log("Para", param);
      if(param[0].isIntersecting) {
        observer.unobserve(lastImage);
        console.log("Inside  Intersecting", lastImage)
        setPageNumber((pageNumber) => pageNumber + 1)
      }
    }, {
      threshold: 0.5 // this mean 50% image seen in the screen then only this callback will excute
    })

    const lastImage = document.querySelector(".image-post:last-child");
    console.log("lastImage", lastImage)
    if(!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if(lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    }
  }, [data])

  return (
    <div className='container'>
      {
        data.map((item, index) => {
          return <img src= {item.download_url} key={item.id} className='image-post'/>
        })
      }
    </div>
  )
}

export default Post