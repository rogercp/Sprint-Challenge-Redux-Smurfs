import React, { Component } from 'react';


class Smurf extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>{this.props.smurf.name}</h1>
    
                <h2>{this.props.smurf.age}</h2>

                <h3>{this.props.smurf.height}</h3>

            </div>

        )
    }
}
export default Smurf;