import React from "react";
import "./LeftColumn.css";

const LeftColumn = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="profile">
        <img
          className="avatar"
          src={props.profileData.avatar_url}
          alt="avatar"
        />
      </div>
      <div className="profile-details">
        <h1 className="vcard-names">
          <p className="vcard-fullname">{props.profileData.name}</p>
          <p className="vcard-username">{props.profileData.login}</p>
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
        <p>{props.profileData.bio}</p>

        <div className="border-top">
          <p>{props.profileData.company}</p>
          <p>{props.profileData.location}</p>
          <p>
            {props.profileData.email ? (
              <a href={`mailto: ${props.profileData.email}`}>
                mailto:{props.profileData.email}
              </a>
            ) : null}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftColumn;
