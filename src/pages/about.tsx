import { Link } from 'gatsby';
import * as React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return(
        <Layout pageTitle='About Me'>
            <p>I am the proud developer of this site, which I built with Gatsby</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage;