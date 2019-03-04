import React from 'react';
import { connect } from 'react-redux';


import './table.scss';

interface IActiveCardProps {
    eventType: string,
    eventCategory:string,
    count: number,
    eventDescription: string;
    data:any[];
}

export const TableWidget: React.SFC<IActiveCardProps> = props => {

    const { eventType, eventCategory, count, eventDescription, data } = props;


    let capitalize = (str: string) => {
        return str.replace(/([A-Z])/g, ' $1') 
         .replace(/^./, function(str){ return str.toUpperCase(); }) 
    } 

    let dueDateColor = 'over-due-green';
    if (!eventCategory.startsWith('Upcoming')) {
        dueDateColor = 'over-due-danger';
    } 

    let renderTable = (data:any[], category: string) => { 
        if(data.length < 0) return; 

        let headers = Object.keys(data[0]);
        return <div className="table-widget-content">
            <table>
                <thead>
                    <tr>
                        {
                          headers.map((headerName:string, index:number) =>  <th key={`th-${index}`} > { capitalize(headerName) } </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item:any, index:number)=>{  
                            return <tr key={`tr-${index}`} >
                                 <td>{item.dueDate}</td>  
                                 <td>{item.facilityName}</td>  
                                 <td>{item.address}</td>  
                                 <td>{item.hauler}</td>  
                                <td className={dueDateColor}>{item.daysPastDue}</td>  
                            </tr>
                        })
                    } 
                </tbody>
            </table>
        </div>;
    };


    return <div className="table-widget">
        <div className="table-widget-header">
            <div className={`count ${dueDateColor}` }> {count} </div>
            <div className="event-description">{eventDescription} </div>
            <div className="more">...</div>
        </div>
        {
            renderTable(data, eventCategory)
        }

        <div className='more-button'> <button> {`More ${capitalize(eventCategory)}` } </button> </div>
    </div>;
};