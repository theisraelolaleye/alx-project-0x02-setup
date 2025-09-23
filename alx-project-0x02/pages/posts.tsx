import React from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps } from '@/interfaces'

const PostPage = ({ posts }: { posts: PostProps[] }) => {
  console.log(posts)

  return (

    <section>
      <Header />
      <h1>Post Page</h1>

      <div className="grid grid-cols-3 gap-2 ">
        {
          posts?.map(({ title, content, userId }: PostProps, key: number) => (
            <PostCard title={title} content={content} userId={userId} key={key} />
          ))
        }
      </div>
    </section>
  )
}



export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default PostPage