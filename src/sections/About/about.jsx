import React from 'react'
import { About } from '../../contents/about';

function about() {
  return (
   <div className='space-y-4'>
    <div className='text-primaryTitle font-bold'>{About.title}</div>
    <div className='text-primaryContent font-serif'>{About.Description}</div>
    </div>
  )
}

export default about;