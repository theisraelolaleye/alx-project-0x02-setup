import React from 'react'
import Card from '@/components/common/Card'

const HomePage = () => {
  return (

    <section>
      <h1>HomePage</h1>

      <Card title="Welcome to the Home Page" content="This is the home page of our Next.js application." />

      <Card title="Another Card" content="This is another card on the home page." />
    </section>
  )
}

export default HomePage