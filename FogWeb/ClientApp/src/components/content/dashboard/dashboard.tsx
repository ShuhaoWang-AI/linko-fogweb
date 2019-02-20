import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { actionCreators } from '../../../store/weather-forecasts';

import { dataServices } from '../../rest-client/data-services'
import { ActiveCard } from './active-card/active-card';
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
    activeCards: any = [];
    componentDidMount() {

        // This method is called when the component is first added to the document
        // this.ensureDataFetched();

        this.activeCards = dataServices.getActiveCards(); 
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        //this.ensureDataFetched();
    }

    ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    render() {
        let arr = [1, 2, 3, 5, 6, 7, 8, 9];
        return (
            <div>
                <span className="title">Dashboard</span>
                <div className='active-cards'>
                    {
                       this.activeCards.map((data: any, index: number) => <ActiveCard key={index} {...data} />)
                    }

                </div>
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