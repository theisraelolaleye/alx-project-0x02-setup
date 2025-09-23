import React from 'react'
import { CardProps } from '../../interfaces'


const Card = ({title, content}: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card