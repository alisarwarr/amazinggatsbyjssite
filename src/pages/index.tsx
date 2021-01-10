import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from './index.module.scss';
import classnames from 'classnames';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const design = {
    color: "black",
    textDecoration: "none",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "1.875rem",
    letterSpacing: "0.25rem"
}

export default function() {
    const screen500 = useMediaQuery('(max-width:500px)');

    return (
        <Layout>
            <Head title="Home"/>
            <div className={style.TOP1}>
                <h1> {screen500  && `most welcome here!`} </h1>
                <h1> {!screen500 && `you're most welcome here!`} </h1>

                <p className={classnames(style.first, style.hideon600)}> <Link style={design} to='/about'>   about   </Link> </p>
                <p className={classnames(style.second, style.hideon600)}><Link style={design} to='/contact'> contact </Link> </p>
                <p className={classnames(style.third, style.hideon600)}> <Link style={design} to='/blog'>    blog    </Link> </p>

                <div className={style.showon600}>
                    <div>
                        <p className={style.first}> <Link style={design} to='/about'>   about   </Link> </p>
                        <p className={style.second}><Link style={design} to='/contact'> contact </Link> </p>
                        <p className={style.thirf}> <Link style={design} to='/blog'>    blog    </Link> </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}