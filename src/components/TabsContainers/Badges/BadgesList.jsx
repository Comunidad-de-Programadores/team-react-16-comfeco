import dataBadges from '../../../database/dataBadges';
import { BadgesItem } from './BadgesItem';

export const BadgesList = () => {
   const badges = dataBadges.filter((item) => item.value > 0);

   return (
      <ul className="badges-list">
         {badges.map((item) => (
            <BadgesItem key={item.id} item={item} />
         ))}
      </ul>
   );
};
