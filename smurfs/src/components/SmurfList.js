import React, { Component } from 'react';
import {connect} from 'react-redux';


import {getSmurfs} from "../actions/index";

class SmurfList extends Component{
constructor(){
super()
this.state={
    name:'',
    age:'',
    height:'',

}
}
    

    ComponentDidMount(){
        this.props.getSmurfs();
        console.log(this.props.smurfs)
    }



    render(){
        return (
            <div>
                <h1>Add Smurf</h1>
                {/* <form>
                        <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        placeholder="Name"
                        onChange={this.onChange}
                        />
                        <input
                        type="number"
                        value={this.state.age}
                        name="age"
                        placeholder="Age"
                        onChange={this.onChange}
                        />
                        <input
                        type="text"
                        value={this.state.height}
                        name="height"
                        placeholder="Height"
                        onChange={this.onChange}
                        />
                        <button onClick={this.addSmurf}>SUBMIT</button>
                </form> */}
                {this.props.smurfs.map((smurf,i)=>(
                    <Smurfe smurf={smurf} key={index}/>
                ))}



            </div>

        )


    }


}
const mapStateToProps=state=>({
    smurfs:state.smurfs,
    fetchingSmurfs:state.fetchingSmurfs,
})
export default connect (mapStateToProps,{getSmurfs})(SmurfList)

