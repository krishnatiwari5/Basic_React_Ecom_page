import React from 'react';




function Tshirt(props) {
    return(
        <div className='items'>
<img src={props.img} className = "tshirt-img" />
<h2 className='tshirt-name'>{props.name}</h2>
<h3 className='price'>Price : {props.price} </h3>
<button className='btn'>Buy Now</button>
</div>
)
}

export default Tshirt;