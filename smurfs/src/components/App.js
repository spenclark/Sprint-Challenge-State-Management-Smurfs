import React, { Component } from "react";
import { connect } from 'react-redux'

import { Smurfs } from './smurf'
import SmurfForm from './smurfForm'
import { fetchSmurfs } from '../actions'

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    if(this.props.isFetching) {
      return <h2>Loading smurfs...</h2>
    }
    
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs  smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.isfetching,
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
