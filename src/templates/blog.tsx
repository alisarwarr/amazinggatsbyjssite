import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './blog.module.scss';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug : {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

export default function(props) {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const url = node.data.target.fields.file['en-US'].url;
                const alt = node.data.target.fields.title['en-US'];
                return <img src={url} alt={alt}/>
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <div className={style.TOP5}>
                <h1> {props.data.contentfulBlogPost.title} </h1>
                <p id={style.x}>
                    {
                        documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
                    }
                </p>
                <p id={style.y}> {props.data.contentfulBlogPost.publishedDate} </p>
            </div>
        </Layout>
    )
}