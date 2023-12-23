import React from 'react'
import { LIST_CARD_IMAGE } from './Utils/Constants'

const VideoCards = ({image}) => {
  return (
    <div className='w-36 p-2 hover:p-0'>
      <img alt="logo" src={LIST_CARD_IMAGE+image} className='rounded-sm' />
    </div>
  )
}

export default VideoCards
