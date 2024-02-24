import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
    // <div style={{ height: '100vh', overflow: 'auto' }}>
    //     {movieInfo.map((item, index) => (
    //       <div key={index} className="card">
    //         <img src={`data:image/jpeg;base64,${item.image}`} className="card-img-top thumbnail-image" alt={item.imageName}/>
    //         <div className="card-body">
    //           <h5 className="card-title">{item.imageName}</h5>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
  );
};

export default MovieComponent;