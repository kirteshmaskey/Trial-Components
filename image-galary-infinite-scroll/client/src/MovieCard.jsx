import React from "react";

const MovieCard = ({ myData }) => {
  const { imageName, image } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id m-5 p-4">{imageName}</p>
        <img src={`data:image/jpeg;base64,${image}`} className="card-img-top thumbnail-image" alt={imageName}/>
      </div>
    </div>
  );
};

export default MovieCard;