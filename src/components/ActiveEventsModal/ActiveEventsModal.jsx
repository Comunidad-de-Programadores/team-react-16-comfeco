import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { AiFillCloseCircle } from 'react-icons/ai'

import './ActiveEventsModal.scss'

export const ActiveEventsModal = ({ setShowModal, showModal, eventSelected }) => {

   const { title, imageUrl, small_description } = eventSelected;

   return (
      <>
         <div className='backdrop'
            onClick={ () => setShowModal( !showModal ) }
         ></div>
         <div className='active-modal'>
            <section
               className='modal'
               title={ title }
            >
               <div className='modal-info'>
                  <h2>
                     Bienvenid@ a { title }
                  </h2>
                  <p>
                     { small_description }
                  </p>
               </div>
               <div className='modal-image'>
                  <img src={ imageUrl } alt={ title }/>
               </div>
            </section>

            <p
               className='success-register'
            >
               <IoIosCheckmarkCircleOutline />
               Registro exitoso a { title }
            </p>

            <a
               href="#!"
               className='close-modal'
               onClick={ () => setShowModal( !showModal ) }
               title='Cerrar'
            >
               <AiFillCloseCircle />
            </a>
         </div>
      </>
   )
}
