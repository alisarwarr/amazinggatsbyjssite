import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProp {
    title: string;
}

function Head({ title }: HeadProp) {
    return (
        <Helmet
            title={`${title} | Website`}
        />
    )
}

export default Head;