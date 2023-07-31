import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import Carausal from "./Carausal";

const Home = () => {
  return (
    <div>
      <div className="welcome">
        <h1>Welcome to FeeDo</h1>
        <h3>Feed your Hunger with FeeDo</h3>
      </div>

        {/* <Carousel>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "90vh" }}
              className=""
              src={require("../img/r1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: "100%", height: "90vh" }}
              className=""
              src={require("../img/r2.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ width: "100%", height: "90vh" }}
              className=" "
              src={require("../img/r3.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

      <section id="gallery">
        <div id="left">
          <h1>Taste your favorite flavour with us !</h1>
        </div>

        <div id="right" className="row photo-gallery">
          <div className="column">
            <img src={require("../img/g1.webp")} className="img-gallery" />
            <img src={require("../img/g2.jpeg")} className="img-gallery" />
            <img src={require("../img/g14.jpg")} className="img-gallery" />
            <img src={require("../img/g5.jpg")} className="img-gallery" />
          </div>

          <div className="column">
            <img src={require("../img/g3.jpeg")} className="img-gallery" />
            <img src={require("../img/g6.jpg")} className="img-gallery" />
            <img src={require("../img/g4.jpeg")} className="img-gallery" />
          </div>

          <div className="column">
            <img src={require("../img/g7.jpg")} className="img-gallery" />
            <img src={require("../img/g8.jpg")} className="img-gallery" />
            <img src={require("../img/g13.jpg")} className="img-gallery" />
            <img src={require("../img/g16.jpg")} className="img-gallery" />
          </div>

          <div className="column">
            <img src={require("../img/g10.jpg")} className="img-gallery" />
            <img src={require("../img/g11.jpg")} className="img-gallery" />
            <img src={require("../img/g12.jpg")} className="img-gallery" />
          </div>
        </div>
      </section>
      
      <Carausal />
      

    </div>
  );
};

export default Home;
