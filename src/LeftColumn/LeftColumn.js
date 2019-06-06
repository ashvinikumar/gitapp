import React from "react";
import "./LeftColumn.css";

const LeftColumn = () => {
  return (
    <React.Fragment>
      <div className="profile">
        <img
          className="avatar"
          src="https://avatars3.githubusercontent.com/u/7427552?s=460&v=4"
          alt="avatar"
        />
      </div>
      <div className="profile-details">
        <h1 className="vcard-names">
          <p className="vcard-fullname">Supreet Singh</p>
          <p className="vcard-username">supreetsingh247</p>
        </h1>
      </div>
      <div className="edit-profile-area">
        <div className="">
          <button className="edit-profile-btn" type="button">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="profile-details">
        <p>Front end developer since 1.5 years</p>

        <div className="border-top">
          <p>Target Corporation</p>
          <p>India</p>
          <p>
            <a href="mailto:supreetsingh.247@gmail.com">
              mailto:supreetsingh.247@gmail.com
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftColumn;
