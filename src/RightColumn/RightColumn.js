import React from "react";
import "./RightColumn.css";
import Moment from "moment";
import Select from "react-select";

const RightColumn = props => {
  return (
    <React.Fragment>
      <div className="user-profile-nav">
        <nav className="UnderlineNav-body">
          <a href="#" className="UnderlineNav-item">
            Overview
          </a>
          <a href="#" className="UnderlineNav-item">
            Repositories
            <span className="counter">11</span>
          </a>
          <div />
          <a href="#" className="UnderlineNav-item">
            Stars
            <span className="counter">5</span>
          </a>
          <a href="#" className="UnderlineNav-item">
            Followers
            <span className="counter">2</span>
          </a>
          <a href="#" className="UnderlineNav-item">
            Following
            <span className="counter">2</span>
          </a>
        </nav>
      </div>

      <div className="find-repository">
        <div className="search-repo">
          <form>
            <div className="input-div">
              <input
                type="text"
                className="search-input"
                name="searchRepoName"
                value={props.searchRepoName}
                onChange={event => props.searchRepoNameChangeHandler(event)}
                placeholder="Find a repository..."
              />
              <div className="selectors">
                <Select
                  className="selectType"
                  placeholder="Type"
                  type="text"
                  onChange={props.selectTypeHandler}
                  value={props.defaultSelectedType}
                  options={props.selectType}
                />

                <Select
                  className="selectLanguage p10"
                  placeholder="Language"
                  type="text"
                  onChange={props.selectLanguageHandler}
                  value={props.defaultSelectedLanguage}
                  options={props.selectLanguage}
                />
                <button href="#" className="create-new-repo">
                  New
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="reposList">
        {props.listOfRepos.length > 0
          ? props.listOfRepos.map(repo => (
              <div className="repo" key={repo.id}>
                <h3 className="repo-name">
                  <a href={`${repo.html_url}`} target="_blank">
                    {repo.name}
                  </a>
                </h3>
                <div className="f6 text-gray mt-2">
                  <span className="ml-0 mr-3">
                    <span className="repo-language-color" />
                    <span className="programmingLanguage">{}</span>
                  </span>
                  Updated {Moment(repo.updated_at).format("DD MMM YYYY")}
                </div>
              </div>
            ))
          : null}
      </div>
    </React.Fragment>
  );
};

export default RightColumn;
