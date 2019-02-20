import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class DispsalSite extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>Disposal Sites</h4>  
                <br /><br />
                <h1>Disposal Sites content </h1> 
            </div>
        );
    }
} 
  
export default connect()(DispsalSite);