import React from "react";
import "./MyProfile.scss";
import ListEvents from "../../ListEvents/ListEvents";

const MyProfile = () => {
  return (
    <>
      <div className="myprofile--container">
        <div className="myprofile--top">
          <div className="top--profile">
            <p>Sección Banner Profile</p>
          </div>
        </div>
        <div className="myprofile--bottom">
          <div className="bottom--left">
            <div className="left--activity">
              <p>Sección Actividad Reciente</p>
            </div>
          </div>
          <div className="bottom--right">
            <div className="right--insignias">
              <p>Sección Insignias</p>
            </div>
            <div className="right--eventos">
              <ListEvents />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
