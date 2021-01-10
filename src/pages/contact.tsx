import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './contact.module.scss';

export default function() {
    return (
        <Layout>
            <Head title="Contact"/>
            <div className={style.TOP3}>
                <h1> CONTACT </h1>
                <p> "you can contact our developers" </p>
            </div>
        </Layout>
    )
}