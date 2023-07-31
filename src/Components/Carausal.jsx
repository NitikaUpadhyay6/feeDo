import React from 'react';
import './Carausal.css';

const Carausal = () => {
    return (
        <div id='eating-mood'>
            <h1 id='h11'>What’s your eating Mood today?</h1>
           
            <div className="card-div">
                <img className="card-img-top" src={require("../img/dish1.jpg")} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">FeeDo Special</h5>
                    <p className="card-text">Mouth watering & delicious dishes of Feedo will stole your heart and taste as well </p>
                    <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
            </div>
           
           
            <div className="card-div" >
                <img className="card-img-top" src={require("../img/dish2.jpg")} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">FeeDo Special </h5>
                    <p className="card-text">Mouth watering & delicious dishes of Feedo will stole your heart and taste as well </p>
                    <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
            </div>
          
         
            <div className="card-div">
                <img className="card-img-top" src={require("../img/p2.jpg")} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">FeeDo Special </h5>
                    <p className="card-text">Mouth watering & delicious dishes of Feedo will stole your heart and taste as well </p>
                    <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
            </div>
            
            
            
            <div className="card-div">
                <img className="card-img-top" src={require("../img/p4.jpg")} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">FeeDo Special </h5>
                    <p className="card-text">Mouth watering & delicious dishes of Feedo will stole your heart and taste as well </p>
                    <a href="#" className="btn btn-outline-primary ">Buy Now</a>
                </div>
            </div>
           
        </div>
    )
}

export default Carausal