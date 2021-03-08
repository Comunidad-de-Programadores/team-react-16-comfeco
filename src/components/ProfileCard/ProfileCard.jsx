import { useContext } from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaUser
} from 'react-icons/fa'

import './ProfileCard.scss'

import AuthContext from '../../hooks/AuthContext';

export const ProfileCard = () => {

    const { user } = useContext( AuthContext )

    return (
        <div className='profile-card'>
            <a href="#!" className='edit-profile' >Editar Perfil <FaUser /></a>
            <div className='profile-card__image'>
                <img
                    src='https://source.unsplash.com/random/150x150'
                    alt='Foto de perfil'
                    draggable='false'
                />
            </div>
            <div className='profile-card__info'>
                <h1 className='username'>{ user.username }</h1>
                <h2 className='profession'>Developer, UX/UI</h2>
                <p className='about'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus quis architecto perferendis deleniti, maiores eveniet aspernatur, adipisci.
                </p>
            </div>
            <div className='profile-card__social'>
                <a
                    href={ `https://www.facebook.com/${ user.username }`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-links'
                >
                    <FaFacebook />
                    <p>facebook.com/{ user.username }</p>
                </a>
                <a
                    href={ `https://www.twitter.com/${ user.username }` }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-links'
                >
                    <FaTwitter />
                    <p>twitter.com/{ user.username }</p>
                </a>
                <a
                    href={ `https://www.github.com/${ user.username }` }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-links'
                >
                    <FaGithub />
                    <p>github.com/{ user.username }</p>
                </a>
                <a
                    href={ `https://www.linkedin.com/in/${ user.username }` }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='social-links'
                >
                    <FaLinkedin />
                    <p>linkedin.com/in/{ user.username }</p>
                </a>
            </div>
        </div>
    )
}
