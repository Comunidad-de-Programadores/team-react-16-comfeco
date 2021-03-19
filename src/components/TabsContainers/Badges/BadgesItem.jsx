export const BadgesItem = ({ item }) => {
   return (
      <li className="badges-list__item">
         <div className="badge-image">{item.image}</div>
         <div className="badge-description">
            <p className="item-description">{item.description}</p>
            {item.value === 0 ? (
               <p className="badge-message">No tienes esta medalla</p>
            ) : (
               <progress value={item.value} max="100"></progress>
            )}
         </div>
      </li>
   );
};
