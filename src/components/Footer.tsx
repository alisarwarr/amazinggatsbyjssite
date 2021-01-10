import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import style from './footer.module.scss';

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={style.footer}>
            <p> created by <span>{data.site.siteMetadata.author}</span>, © 2020 </p>
        </footer>
    )
}

export default Footer;