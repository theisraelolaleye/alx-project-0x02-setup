import React from 'react'
import UserCard from '../components/common/UserCard'
import { UserProps } from '@/interfaces'

const UserPage = ({ user }: { user: UserProps }) => {
  return (
    <div>
      <h1>User Page</h1>
      <UserCard {...user} />
    </div>
  )

}


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await response.json()

  return {
    props: {
      user,
    },
  }
}

export default UserPage;