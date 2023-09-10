import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="HomePage"> 
      <p>I'm making this following the gatsby tutorial</p>
      <StaticImage
        alt="fast car"
        src="../images/transporter.png"
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
