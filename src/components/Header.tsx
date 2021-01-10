import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import style from './header.module.scss';

function Header() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={style.header}>
            <h1>
                <Link to='/' className={style.title}> {data.site.siteMetadata.title} </Link>
            </h1>
            <nav>
                <ul className={style.navList}>
                    <li>
                        <Link to='/' className={style.navItem} activeClassName={style.active}> home </Link>
                    </li>
                    <li>
                        <Link to='/about' className={style.navItem} activeClassName={style.active}> about </Link>
                    </li>
                    <li>
                        <Link to='/contact' className={style.navItem} activeClassName={style.active}> contact </Link>
                    </li>
                    <li>
                        <Link to='/blog' className={style.navItem} activeClassName={style.active}> blog </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;