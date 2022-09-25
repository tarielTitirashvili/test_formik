import React from 'react'

export default function ErrorMeassage(props) {
  return (
    <span className='error'>
        {props.children}
    </span>
  )
}
