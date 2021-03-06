import React from 'react';
import { FaShare } from 'react-icons/fa'

export const EventsList = ({ eventItem, setEventSelected, setShowModal, showModal }) => {

    const { id, title, long_description, imageUrl, small_description } = eventItem;

    const handleEventSelected = () => {
        setEventSelected({
            id,
            title,
            long_description,
            imageUrl,
            small_description
        })
    }

    return (
        <li className='event-content' onClick={ handleEventSelected }>
            <div className='event-content__container'>
                <div className='event-content__image'>
                    <img src={eventItem.imageUrl} alt={eventItem.title} draggable='false' />
                </div>
                <div className='event-content__info'>
                    <h3>{eventItem.title}</h3>
                    <p>{eventItem.small_description}</p>
                </div>
            </div>
            <div className='event-content__buttons'>
                <a href='#!' onClick={ () => setShowModal( !showModal ) }>Participar</a>
                <a href='#!'>Más información</a>
                <a href='#!'><FaShare /></a>
            </div>
        </li>
    );
};
