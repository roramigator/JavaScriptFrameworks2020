import React, { Component } from "react";
// import "./Likes.css";

class Likes extends Component {
  state = {
    likes: 0,
  };

  /**
   *  Complete this function here to increment the likes counter
   *
   */

  like = () => {
    const likes = this.state.likes + 1;
    this.setState({likes});
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
