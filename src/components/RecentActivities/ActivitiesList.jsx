import { FaCheckCircle } from 'react-icons/fa'

export const ActivitiesList = ({ activity }) => {
    return (
        <article className='activity-container'>
            <p className='activity'>{activity.description}</p>
            <FaCheckCircle />
        </article>
    )
};
