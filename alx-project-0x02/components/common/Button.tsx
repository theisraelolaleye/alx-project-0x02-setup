import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({ size, shape, children }: ButtonProps) => {
  const baseStyles = "px-4 py-2 text-white rounded"
  const sizeStyles = size === 'small' ? "text-sm" : size === 'large' ? "text-lg" : "text-md"
  const shapeStyles = shape === 'rounded-full' ? "rounded-full" : shape === 'rounded-md' ? "rounded-md" : "rounded-sm"

  return (
    <button className={`${baseStyles} ${sizeStyles} ${shapeStyles}`}>
      {children}
    </button>
  )
}

export default Button