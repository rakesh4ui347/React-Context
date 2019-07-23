import React,{Fragment} from 'react';
// import MyConText from './MyContext';

const Car=props =>(
    
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
   
)
export default Car;