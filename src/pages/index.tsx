import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="HomePage"> 
      <p>I'm making this following the gatsby tutorial</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
