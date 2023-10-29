const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Our static content generator function.
 *
 * @param {object} o
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Get all posts by date
    // TODO: for whatever reason, the filter is not working here; whatever, will come back to it later
    const response = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { frontmatter: { date: DESC } }
                    limit: 1000
                    filter: { frontmatter: { published: { eq: true } } }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                type
                                published
                            }
                        }
                    }
                }
            }
        `
    );

    // If an error occurs on fetch, crash
    if (response.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        throw response.errors;
    }

    // Get data: post objects, number of posts to render within each template, the template itself to create pages
    const posts = response.data.allMarkdownRemark.edges;

    // Create blog content, design content, and project content
    createPagesByType("blog", posts, createPage);
    createPagesByType("design", posts, createPage);
    createPagesByType("projects", posts, createPage);
    createPagesByType("travel", posts, createPage);
};

/**
 * Create pages of a certain type.
 *
 * @param {string} postType the post type (one-of: blog, design, projects)
 * @param {Object[]} allPosts the array of all posts (i.e., really, Markdown files)
 * @param {function} createPage a function to create a page; given by Gatsby
 */
const createPagesByType = (postType, allPosts, createPage) => {
    // Get templates; define posts per page
    const postsPerPage = 6;
    const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`);
    const postListTemplate = path.resolve(
        `./src/templates/PostListTemplate.tsx`
    );

    // Filter allPosts to posts of specified type
    const posts = allPosts.filter(post => filterPosts(post, postType));

    // Compute number of pages
    const numPages = Math.ceil(posts.length / postsPerPage);

    // For each post, create page (i.e., postTemplate)
    posts.forEach((post, i) => {
        const previous = i === posts.length - 1 ? null : posts[i + 1].node;
        const next = i === 0 ? null : posts[i - 1].node;
        createPage({
            path: `/${postType}${post.node.fields.slug}`,
            component: postTemplate,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        });
    });

    // Create numPages pages with postsPerPage posts on each page (i.e., postListTemplate)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/${postType}` : `/${postType}/${i + 1}`,
            component: postListTemplate,
            context: {
                type: postType,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numPages,
                currentPage: i + 1,
            },
        });
    });
};

/**
 * A helper function to filter posts down.
 *
 * @param {object} post the post itself
 * @param {string} postType the type of the post
 * @returns {boolean} whether or not the post's type matches postType
 */
const filterPosts = (post, postType) => {
    return post.node.frontmatter.published === true && post.node.frontmatter.type === postType;
};

/**
 * Creates needed file paths and node fields.
 *
 * (This also enables RSS!)
 *
 * See more here {@link https://gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode}
 *
 * @param {object} o
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
