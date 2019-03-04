import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class Notices extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>Notices Viewer</h4>  
                <br /><br /> 
            </div>
        );
    }
} 
  
export default connect()(Notices);