import React from "react";
import "./MyProfile.scss";
import ListEvents from "../../ListEvents/ListEvents";
import { useGlobalContext } from "../../../context/contextEditProfile";

const MyProfile = () => {
  const { openModal } = useGlobalContext();
  return (
    <>
      <div className="myprofile--container">
        <div className="myprofile--top">
          <div className="top--profile">
            <p>Sección Banner Profile</p>
            <button onClick={openModal} className="btn">
              show modal
            </button>
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
