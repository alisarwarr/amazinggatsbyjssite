import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import style from './layout.module.scss';
import '../scss/Style.scss';

interface LayoutProp {
    children: ReactNode;
}

function Layout({ children }: LayoutProp) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Header/>
                {
                    children
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;