import React from 'react'
import { BACKGORUND_IMAGE } from './Utils/Constants'

const Backgroundimage = () => {
  return (
    <div className='fixed w-screen aspect-square '>
        <img src={BACKGORUND_IMAGE} alt="Main pic" className='h-screen md:w-full' />
      </div>
  )
}

export default Backgroundimage
