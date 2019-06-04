import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/index";

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

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(newSmurf);
    this.props.addSmurf(newSmurf);
  }

  

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div>
          <h1>Fetching Smurfs!</h1>
        </div>
      );
    } else {
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
          {this.props.smurfs.map((smurf, index) => (
            <Smurf smurf={smurf}  key={index} />
          ))}
        </div>
      );
    }
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
    addSmurf,
  }
)(SmurfList);

