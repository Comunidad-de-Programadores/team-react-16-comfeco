import { BadgesItem } from './BadgesItem';

export const BadgesList = ({ badges }) => {
   return (
      <ul className="badges-list">
         {badges.map((item) => (
            <BadgesItem key={item.id} item={item} />
         ))}
      </ul>
   );
};
