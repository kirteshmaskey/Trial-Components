import React, { useState } from 'react';
import './App.css';

function App() {

  const [uploadedImage, setUploadedImage] = useState("");
  const [allImages, setAllImages] = useState([]);

  const convertToBase64 = (e) => {
    // console.log(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error uploading file: ", error);
    };
  }

  const uploadImage = async () => {
    if(uploadedImage === "") {
      return alert("Please Select Image First");
    }
    const res = await fetch("http://127.0.0.1:8000/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        image: uploadedImage,
      }),
    });

    const data = await res.json();

    if(data.status === 200) {
      alert(data.message);
      setUploadedImage("");
    }else {
      alert(data.error);
    }
  };

  const getAllImages = async () => {
    const res = await fetch("http://127.0.0.1:8000/get-images", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    })

    const data = await res.json();
    
    if(data.status === 200) {
      setAllImages(data.images);
    }
  };

  return (
    <>
      <div className='container'>
        <h3>Upload Image</h3>
        <input 
          accept="image/*"
          type="file"
          onChange={convertToBase64}
          />
          <br />
          <br />
          {uploadedImage ? <img width={100} height={100} src={uploadedImage} alt="" /> : ""}
          <br />
          <br />
          <button onClick={ uploadImage }>Upload</button>
      </div>

      <br />
      <br />

      <div className='container'>
        <h1>Uploaded Images</h1>
        
        <button onClick={ getAllImages }>Show All Images</button>
      
        <div>
          {
            allImages ? 
              allImages.map((image, id) => {
                return (
                  <img width={100} height={100} style={ {"margin": "20px"} } key={id} src={ image.imageBase64 } alt="" />
                )
              })
            :
            "Loading..."
          }
        </div>
      </div>
    </>
  );
}

export default App;
