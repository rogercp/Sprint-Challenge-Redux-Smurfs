import React, { Component } from 'react';
import { connect } from 'react-redux';


class Smurf extends Component{
   constructor(props){
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
export default connect(null,{})(Smurf);