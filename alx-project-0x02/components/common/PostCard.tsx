import React from 'react'
import { type PostProps } from '@/interfaces'

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  )
}

export default PostCard