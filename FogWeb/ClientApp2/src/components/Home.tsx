import React from 'react';
import { connect } from 'react-redux';
import { type } from 'os';

type Prop = {  
}

const Home = (props:Prop) => (
  <div>
      HomePage Here
    </div>
);

export default connect()(Home);
