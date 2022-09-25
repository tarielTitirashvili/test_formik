import React from 'react'

export default function ErrorMeassage(props) {
  return (
    <div className='error'>
        {props.children}
    </div>
  )
}
