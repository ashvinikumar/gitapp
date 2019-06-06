import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";

class App extends Component {
  state = {
    profileData: {},
    listOfRepos: []
  };

  componentDidMount() {
    this.getProfileData();
    this.getListOfRepos();
  }

  getProfileData = () => {
    axios
      .get("https://api.github.com/users/supreetsingh247")
      .then(response => {
        this.setState({
          profileData: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getListOfRepos = () => {
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then(response => {
        this.setState({
          listOfRepos: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="row padding5">
          <div className="container">
            {/* left column */}
            <div className="left-column">
              <LeftColumn profileData={this.state.profileData} />
            </div>
            {/* right column */}
            <div className="right-column">
              <RightColumn listOfRepos={this.state.listOfRepos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
