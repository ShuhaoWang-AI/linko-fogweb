import React from 'react';
import { connect } from 'react-redux';


import './active-card.scss';

interface IActiveCardProps {
    eventType: string,
    count: number,
    eventDescription: string;
}
export const ActiveCard: React.SFC<IActiveCardProps> = props => { 

    const { eventType, count, eventDescription } = props;
    let color = 'green-card';
    if (eventType === 'failed') {
        color = 'red-card';
    } else if (eventType === 'warning') {
        color = 'warning-card';
    } 

    return <div className={color}>
        <div className="count"> {count} </div>
        <div className="event-description">
            {eventDescription} 
        </div>
    </div>;
};