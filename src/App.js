import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";

class App extends Component {
  state = {
    profileData: {},
    listOfRepos: [],
    searchRepoName: "",
    selectType: [
      { value: "all", label: "All" },
      { value: "sources", label: "Sources" },
      { value: "forks", label: "Forks" },
      { value: "archived", label: "Archived" },
      { value: "mirrors", label: "Mirrors" }
    ],
    defaultSelectedType: [{value: "all", label: "All"}],
    selectLanguage: [
      { value: "all", label: "All" },
      { value: "html", label: "HTML" },
      { value: "javaScript", label: "JavaScript" },
      { value: "css", label: "CSS" }
    ],
    defaultSelectedLanguage: [{value: "all", label: "All"}]
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

  searchRepoNameChangeHandler = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    },
      () => {
        // replace the below API End point(one of them, I tried both but not getting the particular user's repo) with the appropriate end point

        // axios
          // .get(`https://api.github.com/users/supreetsingh247/repos?q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
          // // .get(`https://api.github.com/users/supreetsingh247?utf8=%E2%9C%93&tab=repositories&q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
          // .then(response => {
          //   this.setState({
          //      listOfRepos: response.data
          //   });
          // })
          // .catch(err => {
          //   console.log(err);
          // })
      }
    );
  };

  selectTypeHandler = (changedType) => {
    this.setState({
      defaultSelectedType: changedType
    }, () => {
      // axios
        // .get(`https://api.github.com/users/supreetsingh247/repos?q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
        // // .get(`https://api.github.com/users/supreetsingh247?utf8=%E2%9C%93&tab=repositories&q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
        // .then(response => {
        //   this.setState({
        //      listOfRepos: response.data
        //   });
        // })
        // .catch(err => {
        //   console.log(err);
        // })
    })
  }

  selectLanguageHandler = (changedLanguage) => {
    this.setState({
      defaultSelectedLanguage: changedLanguage
    }, () => {
      // axios
        // .get(`https://api.github.com/users/supreetsingh247/repos?q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
        // // .get(`https://api.github.com/users/supreetsingh247?utf8=%E2%9C%93&tab=repositories&q=${this.state.searchRepoName}&type=${this.state.defaultSelectedType.value}&language=${this.state.defaultSelectedLanguage.value}`)
        // .then(response => {
        //   this.setState({
        //      listOfRepos: response.data
        //   });
        // })
        // .catch(err => {
        //   console.log(err);
        // })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row padding5">
          <div className="container">
            {/* left column */}
            <div className="left-column">
              <LeftColumn profileData={this.state.profileData} />
            </div>
            <div className="center">&nbsp;</div>
            {/* right column */}
            <div className="right-column">
              <RightColumn
                listOfRepos={this.state.listOfRepos}
                searchRepoName={this.state.searchRepoName}
                searchRepoNameChangeHandler={this.searchRepoNameChangeHandler}
                selectType={this.state.selectType}
                defaultSelectedType={this.state.defaultSelectedType}
                selectTypeHandler={this.selectTypeHandler}
                defaultSelectedLanguage={this.state.defaultSelectedLanguage}
                selectLanguage={this.state.selectLanguage}
                selectLanguageHandler={this.selectLanguageHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
