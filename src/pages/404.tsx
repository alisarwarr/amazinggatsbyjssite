import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './404.module.scss';

export default function() {
    return (
        <Layout>
            <Head title="404"/>
            <div className={style.TOP6}>
                <h1> Page not found </h1>
                <Link to='/'> Go to Home </Link>
            </div>
        </Layout>
    )
}