import React from 'react';
import Tshirt from './tshirt';
import "./styles.css"

const image1 = require("./img/tshirt/tshirt1.jpg");
const image2 = require("./img/tshirt/tshirt2.webp");
const image3 = require("./img/tshirt/tshirt3.jpeg");
const image4 = require("./img/tshirt/tshirt4.jpeg");
const image5 = require("./img/tshirt/tshirt5.jpg");
const image6 = require("./img/tshirt/tshirt1.jpg");

function App() {
    return(
        <div className='container'>
        <Tshirt img= {image1} name="Black" price="590Rs" />
        <Tshirt img= {image2} name="Grey White" price="800Rs" />
        <Tshirt img= {image3} name="Dark Green" price="990Rs" />
        <Tshirt img= {image4} name="Yellow" price="430Rs" />
        <Tshirt img= {image5} name="Blue Black" price="450Rs" />
        <Tshirt img= {image1} name="Black" price="590Rs" />
        </div>
    );
}

export default App;