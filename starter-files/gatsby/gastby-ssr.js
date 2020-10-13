import React from 'react';
import Layout from './src/components/Layout';
import wrapPageElement from './gatsby-browser';

export function wrapPageElement ({ element, props }) {
    return <Layout{...props}>{element}</Layout>
}
