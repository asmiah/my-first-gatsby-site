import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'

export interface IBlogPageProps {
    data: any;
}

const BlogPage = (props: IBlogPageProps) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            {
                props.data.allMdx.nodes.map((node: any) => (
                <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.frontmatter.slug}`}>
                          {node.frontmatter.title}
                      </Link>
                    </h2>
                </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;