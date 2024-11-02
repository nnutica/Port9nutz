import React from 'react'

function Picture({picture,title}) {
  return (
    <div id="photo">
    <img src={picture} alt={title} className='w-5/6 rounded-md gap-y-1' />
     </div>
  )
}

export default Picture