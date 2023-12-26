import React from 'react'
import { LIST_CARD_IMAGE } from './Utils/Constants'

const VideoCards = ({image}) => {
  if (!image)
  return;
  return (
    <div className='w-52 p-2 hover:p-0'>
      <img alt="logo" src={LIST_CARD_IMAGE+image} className='rounded-sm w-full' />
    </div>
  )
}

export default VideoCards
