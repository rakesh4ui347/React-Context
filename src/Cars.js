import React,{Fragment} from 'react';
import Car from './Car';
import MyConText from './MyContext';
const Cars=() =>(
    <MyConText.Consumer>
        {context => (
            <Fragment>
       <h4>Cars: </h4>
        {Object.keys(context.cars).map(cardId =>(
            <Car
            key={cardId}
            name={context.cars[cardId].name}
            price={context.cars[cardId].price}
            incrementPrice={()=>context.incrementCarPrice(cardId)}
            decrementPrice={()=>context.decrementCarPrice(cardId)}
            />
        ))}
    </Fragment>
        )}
    
    </MyConText.Consumer>
);
export default Cars;