import React from 'react';
import GroupsContainer from '../../GroupsContainer/GroupsContainer';
import SearchGroup from '../../SearchGroup/SearchGroup';
import Filters from '../../Filters/Filters';
import MyGroup from '../../MyGroup/MyGroup';
import './Groups.scss';

export default function Groups() {
   return (
      <>
         <div className="container--group">
            <div className="group--mygroup">
               <MyGroup />
            </div>
            <div className="group--list">
               <div className="list--search">
                  <div className="search--filter">
                     <Filters />
                  </div>
                  <div className="search--browser">
                     <SearchGroup />
                  </div>
               </div>
               <div className="list--groups">
                  <GroupsContainer />
               </div>
            </div>
         </div>
      </>
   );
}
