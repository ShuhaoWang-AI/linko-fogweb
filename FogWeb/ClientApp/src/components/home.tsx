import React from 'react';

import { connect } from 'react-redux';
import { type } from 'os';

import './home.scss';

type Prop = {  
}

const Home = (props:Prop) => (

    <div className="linko-content">
        put content here
    </div>   
 
);

export default connect()(Home); 