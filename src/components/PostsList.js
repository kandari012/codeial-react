import axios from "axios";
import React, { Component } from "react";

export class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://www.omdbapi.com/?apikey=3ca5df7&t=superman")
      .then((data) => {
        this.setState({ movie: data.data.Title });
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h1>Codeial Movie</h1>
        {this.state.movie}
      </div>
    );
  }
}

export default PostsList;
