import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const AboutPage = () => {
  return (
    <section>
      <Header />
      <h1>AboutPage</h1>
      <Button size="large" shape="rounded-md">Click Me</Button>
      <Button size="small" shape="rounded-sm">Click Me</Button>
      <Button size="medium" shape="rounded-full">Click Me</Button>
    </section>
  )
}

export default AboutPage