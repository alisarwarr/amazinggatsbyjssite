import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './about.module.scss';

export default function() {
    return (
        <Layout>
            <Head title="About"/>
            <div className={style.TOP2}>
                <h1> ABOUT </h1>
                <p> "our developers lived in Pakistan" </p>
            </div>
        </Layout>
    )
}