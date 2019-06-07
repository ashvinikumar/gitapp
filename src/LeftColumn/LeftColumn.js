import React from "react";
import "./LeftColumn.css";

const LeftColumn = props => {
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
          <p>
            <i className="fas fa-user-friends" />{" "}
            <span>{props.profileData.company}</span>
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />{" "}
            <span>{props.profileData.location}</span>
          </p>
          <p>
            {props.profileData.email ? (
              <span>
                <i className="far fa-envelope" />{" "}
                <span>
                  <a href={`mailto: ${props.profileData.email}`}>
                    mailto:{props.profileData.email}
                  </a>
                </span>
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftColumn;
