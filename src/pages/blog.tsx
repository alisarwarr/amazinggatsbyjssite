import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './blog.module.scss'; 

export default function() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
                edges {
                    node {
                        title,
                        slug,
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog"/>
            <div className={style.TOP4}>
                <h1> BLOG </h1>
                <ol>
                    {
                        data.allContentfulBlogPost.edges.map((x, index) => 
                            <li key={index}>
                                <Link to={`/blog/${x.node.slug}`}>
                                   <h2> {x.node.title}         </h2>
                                   <p>  {x.node.publishedDate} </p>
                                </Link>
                            </li>
                        )
                    }
                </ol>
            </div>
        </Layout>
    )
}