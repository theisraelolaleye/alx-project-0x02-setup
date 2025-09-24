import React from 'react'
import { type UserProps } from '@/interfaces'

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 max-w-xs shadow-md bg-white mx-auto my-4">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="mb-1 text-gray-600 text-base">{email}</p>
      <p className="text-gray-400 text-sm">{address}</p>
    </div>
  )
}





export default UserCard