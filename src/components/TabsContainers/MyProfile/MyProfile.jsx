import React from 'react';
import './MyProfile.scss';
import ListEvents from '../../ListEvents/ListEvents';
import { ProfileCard } from '../../ProfileCard/ProfileCard';
import { RecentActivities } from '../../RecentActivities/RecentActivities';
import Badges from '../Badges/Badges';

const MyProfile = () => {
   return (
      <>
         <div className="myprofile--container">
            <div className="myprofile--top">
               <div className="top--profile">
                  <ProfileCard />
               </div>
            </div>
            <div className="myprofile--bottom">
               <div className="bottom--left">
                  <div className="left--activity">
                     <RecentActivities />
                  </div>
               </div>
               <div className="bottom--right">
                  <div className="right--badges">
                     <Badges />
                  </div>
                  <div className="right--events">
                     <ListEvents />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default MyProfile;
