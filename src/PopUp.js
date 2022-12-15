import  React from 'react';
import './PopUp.css';

export function PopUp(props) {
    console.log("in popup function")
    return (
      <div className='popup'>
        <h1>{props.title}</h1>
        <p>{props.value}</p>
      </div>
    );
}

export default PopUp;
