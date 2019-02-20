import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class Facilities extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>Facilities list </h4>  
                <br /><br /> 
            </div>
        );
    }
} 
  
export default connect()(Facilities);