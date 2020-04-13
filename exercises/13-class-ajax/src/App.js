import React, {Component} from "react";
import './App.css';

/** Convert me into a class component  */

class App extends Component {
  state = {
    quote: ""
  };

  componentDidMount(){
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(s=>s.json())
    .then(res=>{
      this.setState({quote:res});
    })
  }

  render(){
    return (
      <div className="App">
        <img src='https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png' alt='rs' />
        <h1>Ron Swanson</h1>
        {this.state.quote}
      </div>
    )
  }
}

export default App;
