import React from 'react';

import LinkoRoute from "./components/route/linko-route";
import { Container } from 'reactstrap';
import Layout from './components/layout/layout'; 

export const App = (props: any) => (
    <div>
        <Layout >
            <LinkoRoute />
        </Layout>
    </div>
); 