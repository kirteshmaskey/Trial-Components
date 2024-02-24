import React, { useState, useEffect } from "react";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `http://localhost:5000/api/data?page=${page}`
    );
    const data = await res.json();
    console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    console.log("fgdfghdgffghcfgfghfghjfhjfhfhfhf")
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("qwertyuiokjhgf")
    console.log("scrollHeight " + document.documentElement.scrollHeight);
    console.log("innerHeight " + window.innerHeight);
    console.log("scrollTop " + document.documentElement.scrollTop);
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      {card.map((item, index) => (
        <div key={index} className="card">
          <img src={`data:image/jpeg;base64,${item.image}`} className="card-img-top thumbnail-image" alt={item.imageName}/>
          <div className="card-body">
            <h5 className="card-title">{item.imageName}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


