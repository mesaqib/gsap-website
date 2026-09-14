import React from 'react'

const BgVid = () => {
  return (
     <div className='h-full w-full'>
    <video src="/media/vid.mp4" className='h-full w-full object-cover' autoPlay muted loop ></video>
     </div>
  )
}

export default BgVid
