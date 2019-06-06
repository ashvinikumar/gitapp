import React from "react";
import "./RightColumn.css";

const RightColumn = () => {
  return (
    <React.Fragment>
      <div className="user-profile-nav">
        <nav className="UnderlineNav-body">
          <a href="" className="UnderlineNav-item">
            Overview
          </a>
          <a href="" className="UnderlineNav-item">
            Repositories
            <span className="counter">11</span>
          </a>
          <a href="" className="UnderlineNav-item">
            Stars
            <span className="counter">5</span>
          </a>
          <a href="" className="UnderlineNav-item">
            Followers
            <span className="counter">2</span>
          </a>
          <a href="" className="UnderlineNav-item">
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
                placeholder="Find a repository..."
              />
              <div className="selectors">
                <select className="type-selector">
                  <option value="all">All</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="sources">Sources</option>
                  <option value="forks">Forks</option>
                  <option value="archived">Archived</option>
                  <option value="mirrors">Mirrors</option>
                </select>
                <select className="language-selector">
                  <option value="all">All</option>
                  <option value="javaScript">JavaScript</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="python">Python</option>
                  <option value="typeScript">TypeScript</option>
                </select>
                <a href="#" className="create-new-repo">
                  New
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightColumn;
