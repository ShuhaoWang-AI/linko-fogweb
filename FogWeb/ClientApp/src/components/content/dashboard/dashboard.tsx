import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { actionCreators } from '../../../store/weather-forecasts';

import '../content.css'
import './dashboard.css'


interface Props {
    counter: number,
    match: {
        params: {
            startDateIndex: string
        }
    }
    requestWeatherForecasts: (index: number) => void;
}

class Dashboard extends Component<Props, any> {
    componentDidMount() {
        debugger;
        // This method is called when the component is first added to the document
        // this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    render() {
        return (
            <div>
                <h4>Dashboard</h4>  
                <br /><br />
                <h1>Dashboard content </h1> 
            </div>
        );
    }
} 

export type State = {
    weatherForecasts: any
}

const mapStateToProps = (state: State) => state.weatherForecasts

const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => {
    return {
        requestWeatherForecasts: (startDateIndex: number) => dispatch(actionCreators.requestWeatherForecasts(startDateIndex)),
    };
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);