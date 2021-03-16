import { useState } from 'react';
import { EventCard } from './EventCard';
import { EventsList } from './EventsList';

import eventsList from './eventsListData'
import './Events.scss';
import { ActiveEventsModal } from '../../ActiveEventsModal/ActiveEventsModal';

const Events = () => {

  const [eventSelected, setEventSelected] = useState({
    id: eventsList[ 0 ].id,
    title: eventsList[ 0 ].title,
    long_description: eventsList[ 0 ].long_description,
    small_description: eventsList[ 0 ].small_description,
    imageUrl: eventsList[ 0 ].imageUrl
  })

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
        showModal
        &&
        (
        <div className='active-events__modal'>
          <ActiveEventsModal
            setShowModal={ setShowModal }
            showModal={ showModal }
            eventSelected={ eventSelected }
          />
        </div>
        )
      }
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
              setShowModal={ setShowModal }
              showModal={ showModal }
            />
          )) }
        </ul>
      </div>
    </>
  );
};

export default Events;
