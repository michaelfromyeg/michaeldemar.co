import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/global/Layout'
import SEO from '../components/global/SEO'

interface NotFoundPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
    location: string
}

const NotFoundPage = ({ data, location }: NotFoundPageProps): ReactElement => {
    const { title } = data.site.siteMetadata

    return (
        <Layout location={location} title={title}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that {`doesn't`} exist... the sadness.</p>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
