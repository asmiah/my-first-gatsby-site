import { Link } from 'gatsby';
import * as React from 'react'
import Layout from '../components/layout';

const AboutPage = () => {
    return(
        <Layout pageTitle='About Me'>
            <p>I am the proud developer of this site, which I built with Gatsby</p>
        </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Me</title>
        <meta name='description' content='This page is about the company: miahtech'/>
    </>
)

export default AboutPage;