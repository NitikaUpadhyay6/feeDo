import React from 'react'

const Gallery = () => {
  return (
    <div>
        <div className="row photo-gallery">
        <div className="column">
          <img src={require("../img/g1.webp")} />
          <img src={require("../img/g2.jpeg")} />
          <img src={require("../img/g14.jpg")} />
          <img src={require("../img/g5.jpg")} />
        </div>

        <div className="column">
          <img src={require("../img/g3.jpeg")} /> 
          <img src={require("../img/g6.jpg")} />
          <img src={require("../img/g4.jpeg")} />

        </div>

        <div className="column">
          <img src={require("../img/g7.jpg")} />
          <img src={require("../img/g8.jpg")} />
          <img src={require("../img/g13.jpg")} />
          <img src={require("../img/g16.jpg")} />
        </div>

        <div className="column">
          <img src={require("../img/g10.jpg")} />
          <img src={require("../img/g11.jpg")} />
          <img src={require("../img/g12.jpg")} />
        </div>
      </div>
    </div>
  )
}

export default Gallery