import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class Haulers extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>Hauler Management</h4>  
                <br /><br />
                <h1>Hauler Management content </h1> 
            </div>
        );
    }
} 
  
export default connect()(Haulers);