import React from 'react'

import './EventCard.scss'

export const EventCard = ({ eventSelected }) => {

    const { title, imageUrl, long_description } = eventSelected;

    return (
        <div className='event-card'>
            <div className='event-card__image'>
                <img src={ imageUrl } alt={ title } draggable='false' />
            </div>
            <div className='event-card__info'>
                <h2>{ title }</h2>
                <p>{ long_description }</p>
            </div>
        </div>
    )
}
