import dataBadges from '../../../database/dataBadges';
import { BadgesItem } from './BadgesItem';

export const BadgesTab = () => {
   return (
      <section className="badges-tab">
         {dataBadges.map((item) => (
            <BadgesItem key={item.id} item={item} />
         ))}
      </section>
   );
};
