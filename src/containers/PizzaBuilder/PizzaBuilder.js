import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class PizzaBuilder extends Component{
    render(){
        return(
            <Aux>
                <div>Pizza</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default PizzaBuilder;