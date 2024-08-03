import React from 'react'

const Button = ({text, styles,icon, type}) => {
  return (
    <button className={`${styles} font-montserrat`} type={`${type}`}>
      {text}
      {icon}
    </button>
  )
}

export default Button
