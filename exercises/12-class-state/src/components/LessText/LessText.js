import React, { Component } from "react";
// import "./Likes.css";

class Likes extends Component {
  state = {
    txt: this.props.length
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

  lessText = (l) => {

    this.setState({length: l});
  };

  render() {
    /**
     * In the render function, add an onclick to the button to update the like count.
     *
     */
    return (
      <div className="container mt-4 h1">
        <h3>Likes</h3>
        <button className="btn btn-light" onClick={this.like}>{this.state.likes} Likes</button>
      </div>
    );
  }
}

export default Likes;
