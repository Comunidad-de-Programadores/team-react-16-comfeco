import React from 'react';
import dataBadges from '../../../database/dataBadges';

export const BadgesTab = () => {
   return (
      <section className="badges-tab">
         {dataBadges.map((item) => (
            <p>{item.id}</p>
         ))}
      </section>
   );
};
