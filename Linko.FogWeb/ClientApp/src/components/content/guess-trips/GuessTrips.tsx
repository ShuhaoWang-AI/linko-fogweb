import React, { Component } from 'react'; 
import { connect } from 'react-redux';  


interface Props {}

class GuessTrips extends Component<Props, any> {

    render() {
        return (
            <div>
                <h4>GuessTrips</h4>  
                <br /><br /> 
            </div>
        );
    }
} 
  
export default connect()(GuessTrips);