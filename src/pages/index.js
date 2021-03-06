import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import Button from "../components/button"
import Text from "../components/text"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>heading / hello world</h1>
      <h2>title / hello world</h2>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Text as="h1">heading / hello world</Text>
      <Text as="h2" variant="title">
        title / hello world
      </Text>
      <Text as="h3" variant="body">
        body / hello world
      </Text>
      <Text as="h4" variant="label">
        label / ;lll;;;;
      </Text>
    </Layout>
  )
}

export default Index
