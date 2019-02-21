import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import _ from "lodash"; //import { actionCreators } from '../../../store/weather-forecasts';
import {actionCreators} from '../../../store/actions/action-creators/dashboard-action-creators'

import { dataServices } from '../../../rest-client/data-services'
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
    activeCards: any[];
    loadActiveCards: () => void;
}

class Dashboard extends Component<Props, any> {

    componentDidMount() { 
        this.ensureDataFetched(); 
    }

    componentDidUpdate() { 
    }

    ensureDataFetched() {
        this.props.loadActiveCards();
    }

    render() {
        const { activeCards } = this.props;   
        return (
            <div>
                <span className="title">Dashboard</span>
                <div className='active-cards'>
                    {
                      activeCards && activeCards.map((data: any, index: number) => <ActiveCard key={index} {...data} />)
                    } 
                </div> 
            </div>
        );
    }
}

export type State = {
    dashBoard: any
}
 
const mapStateToProps = (state: State) => { 
    const { activeCards } = state.dashBoard;
    return {
       activeCards
    } 
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => {
    return {
        loadActiveCards: () => dispatch(actionCreators.loadActiveCards()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);