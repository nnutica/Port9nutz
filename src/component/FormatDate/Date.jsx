import React  from 'react'

function Date({ ishighlight,children }) {
  return (
    <div className='text-lg'>
    <span  className={` text-lg ${ishighlight ? "text-primarySubcontent" : " text-primaryOnhover"}`}>
        {children}
        </span>
  </div>
  )
}

export default Date