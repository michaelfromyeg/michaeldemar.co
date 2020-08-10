const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // TODO: refactor so that each of blog/portfolio/design is handled separately, and then merged w/ 'everything'
    // right now the left/right navigation is not very good because it includes all nodes

    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                type
                            }
                        }
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        throw result.errors
    }

    // Globals
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 6
    const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`)
    const postListTemplate = path.resolve(
        `./src/templates/PostListTemplate.tsx`
    )

    // Filtering posts into categories
    const blogPosts = posts.filter(post => filterPosts(post, 'blog'))
    const designPosts = posts.filter(post => filterPosts(post, 'design'))
    const projectPosts = posts.filter(post => filterPosts(post, 'project'))

    // Blog posts
    const blogNumPages = Math.ceil(blogPosts.length / postsPerPage)
    blogPosts.forEach((post, i) => {
        const previous =
            i === blogPosts.length - 1 ? null : blogPosts[i + 1].node
        const next = i === 0 ? null : blogPosts[i - 1].node
        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
    Array.from({ length: blogNumPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: postListTemplate,
            context: {
                type: 'blog',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: blogNumPages,
                currentPage: i + 1,
            },
        })
    })

    // Design posts
    const designNumPages = Math.ceil(blogPosts.length / postsPerPage)
    designPosts.forEach((post, i) => {
        const previous =
            i === designPosts.length - 1 ? null : designPosts[i + 1].node
        const next = i === 0 ? null : designPosts[i - 1].node
        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
    Array.from({ length: designNumPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/design` : `/design/${i + 1}`,
            component: postListTemplate,
            context: {
                type: 'design',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: designNumPages,
                currentPage: i + 1,
            },
        })
    })

    // Project posts
    const projectNumPages = Math.ceil(blogPosts.length / postsPerPage)
    projectPosts.forEach((post, i) => {
        const previous =
            i === projectPosts.length - 1 ? null : projectPosts[i + 1].node
        const next = i === 0 ? null : projectPosts[i - 1].node
        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
    Array.from({ length: projectNumPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/projects` : `/projects/${i + 1}`,
            component: postListTemplate,
            context: {
                type: 'projects',
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: projectNumPages,
                currentPage: i + 1,
            },
        })
    })
}

const filterPosts = (post, type) => {
    return post.node.frontmatter.type === type
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
