import React from 'react';
import { ActivitiesList } from './ActivitiesList';

import './RecentActivities.scss'

export const RecentActivities = () => {
    const recentActivities = [
        { id: 1, description: 'Te inscribiste a COMFECO 2022' },
        { id: 2, description: 'Te uniste al evento de la comunidad' },
        { id: 3, description: 'Obtuviste un reconocimiento en COMFECO 2021' },
    ];

    return (
        <>
            <h2 className='recent-activity--title'>Actividad Reciente</h2>
            {recentActivities.length === 0 ? (
                <p>No hay actividades recientes</p>
            ) : (
                <div className='activities-list'>
                    {recentActivities.map((activity) => (
                            <ActivitiesList key={activity.id} activity={activity} />
                    ))}
                </div>
            )}
        </>
    );
};
