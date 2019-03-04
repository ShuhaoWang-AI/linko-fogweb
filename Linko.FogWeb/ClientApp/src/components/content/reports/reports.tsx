import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class Reports extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>Reports</h4>  
                <br /><br /> 
            </div>
        );
    }
} 
  
export default connect()(Reports);