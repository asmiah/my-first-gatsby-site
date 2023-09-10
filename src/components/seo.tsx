import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export interface ISeoProps {
  title: any
}

const Seo = ( props: ISeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{props.title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo