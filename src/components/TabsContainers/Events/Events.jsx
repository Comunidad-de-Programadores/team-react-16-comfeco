import { useState } from 'react';
import { EventCard } from './EventCard';
import { EventsList } from './EventsList';

import eventsList from './eventsListData'
import './Events.scss';

const Events = () => {

  const [eventSelected, setEventSelected] = useState({
    id: eventsList[ 0 ].id,
    title: eventsList[ 0 ].title,
    long_description: eventsList[ 0 ].long_description,
    imageUrl: eventsList[ 0 ].imageUrl
  })

  return (
    <div className='events-wrapper'>
      <div className='events-wrapper--left'>
        <EventCard eventSelected={ eventSelected } />
      </div>
      <ul className='events-wrapper--rigth'>
        { eventsList.map( eventItem => (
          <EventsList
            key={ eventItem.id }
            eventItem={ eventItem }
            setEventSelected={ setEventSelected }
          />
        )) }
      </ul>
    </div>
  );
};

export default Events;
