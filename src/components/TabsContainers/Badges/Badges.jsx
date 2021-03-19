import './Badges.scss';
import { BadgesList } from './BadgesList';
import dataBadges from '../../../database/dataBadges';

const Badges = () => {
   const badges = dataBadges.filter((item) => item.value > 0);

   return (
      <aside className="badges">
         <h3>Insignias</h3>
         <BadgesList badges={badges} />
      </aside>
   );
};

export default Badges;
