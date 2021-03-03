import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const ContentCarousel = ({ info }) => {

    const { image, title, name  } = info

    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-image'>
                    <img src={ image } alt={ title }/>
                </div>
                <ul className='social-icons'>
                    <li>
                        <a href='#!'>
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
                <div className='details'>
                    <h2>{ name }</h2>
                </div>
            </div>
        </div>
    )
}