import React from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { useState } from 'react'
import Header from '@/components/layout/Header'


const HomePage = () => {
  const [posts, setPosts] = useState(
    [
      { title: 'Welcome to the Home Page', content: 'This is the home page of our Next.js application.' },
      { title: 'Another Card', content: 'This is another card on the home page.' },
    ]
  )

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post])
  }

  return (
    <>
      <Header />

      <section>
        <h1 className="text-2xl font-bold mb-4">HomePage</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {isModalOpen && (
          <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
        )}
      </section>

    </>
  )
}

export default HomePage