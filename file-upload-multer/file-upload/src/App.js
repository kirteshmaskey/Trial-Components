import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage] = useState();
  const [allImages, setAllImages] = useState();

  // useEffect(()=> {
  //   handleGetImages();
  // }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://127.0.0.1:8000/upload-image",
      formData,
      {
        headers : { "Content-Type" : "multipart/form-data" }
      }
    );
  };


  const handleGetImages = async () => {
    const res = await axios.get("http://127.0.0.1:8000/get-images");
    setAllImages(res.data.data);
  }


  const handleInputChange = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <>
      <div className="container">
        <h3>Upload Image</h3>
        <form onSubmit={ handleFormSubmit }>
          <div>
            <input type="file" accept="image/*" onChange={ handleInputChange }/>
            <br />
            <button type="Submit">Upload</button>
          </div>
        </form>
      </div>

      <div className='container'>
        <h2>See all images here</h2>
        <button onClick={ handleGetImages } >See Uploaded Images</button>
        <br />
        <br />
        {
          allImages ?
            allImages.map((image) => {
              return <img width={100} height={100} src={require(`./images/${image.imagePath}`)} />
            })
          :
            "Loading..."
        }
      </div>
    </>
  );
}

export default App;
