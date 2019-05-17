import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/index";

import Smurf from "./Smurf";

class SmurfList extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  

  render() {
    
      return (
        <div>
            <h2>Add a Smurf</h2>
          <form>
            <input
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChanges}
            />
            <input
              type="number"
              value={this.state.age}
              name="age"
              placeholder="Age"
              onChange={this.handleChanges}
            />
            <input
              type="text"
              value={this.state.height}
              name="height"
              placeholder="Height"
              onChange={this.handleChanges}
            />
            <button onClick={this.addSmurf}>SUBMIT</button>
          </form>
          <h2>The Village</h2>
          {this.props.smurfs.map((smurf, i) => (
            <Smurf smurf={smurf}  key={i} />
          ))}
        </div>
      );
    }
  }


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    
  }
)(SmurfList);

