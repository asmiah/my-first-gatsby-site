import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

export interface IBlogPageProps {
    data: any;
}

const BlogPage = (props: IBlogPageProps) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            <ul>
                {
                    props.data.allFile.nodes.map((node: any) => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql `
    query{
        allFile {
            nodes {
                name
            }
            }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage;