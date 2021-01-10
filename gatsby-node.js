exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path      : `/blog/${edge.node.slug}`,
            component : require.resolve('./src/templates/blog.tsx'),
            context   : {
                slug  : edge.node.slug
            }
        })
    })
}