import React from 'react';
import './PizzaIngredient.css';

const pizzaIngredient = (props) =>{
    let ingredient = null;
    switch(props.type){
        case('dough'):
            ingredient = <div className="Dough"></div>;
            break;
        case('proshuto'):
            ingredient = <div className="Proshuto"></div>;
            break;
        case('mozzarella'):
            ingredient = <div className="Mozzarella"></div>;
            break;
        case('olives'):
            ingredient = <div className="Olives"></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};

export default pizzaIngredient;