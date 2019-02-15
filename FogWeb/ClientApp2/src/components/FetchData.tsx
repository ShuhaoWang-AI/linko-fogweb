import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { actionCreators } from '../store/WeatherForecasts';

interface Props {
  counter: number,
  match: {
    params: {
      startDateIndex: string
    }
  }
  requestWeatherForecasts: (index:number) => void;
}

class FetchData extends Component<Props, any> {
  componentDidMount() {
    // This method is called when the component is first added to the document
    this.ensureDataFetched();
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
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        {renderForecastsTable(this.props)}
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderForecastsTable(props:any) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {props.forecasts.map((forecast:any) =>
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function renderPagination(props: any) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}

// export default connect(
//   state => state.weatherForecasts,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(FetchData);


// export default connect(
//   state => state.counter,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(Counter);


export type State = { 
  weatherForecasts: any
} 

// const mapStateToProps = (state: State) => state.counter; 

const mapStateToProps = (state: State) => state.weatherForecasts

const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => {
  return {
    requestWeatherForecasts: (startDateIndex: number) => dispatch(actionCreators.requestWeatherForecasts(startDateIndex)),
  };
}

// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   requestWeatherForecasts: (startDateIndex: number) => dispatch(actionCreators.requestWeatherForecasts(startDateIndex))
// });


// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   increment: (index:number):Promise<void> => dispatch(actionCreators.requestWeatherForecasts(index))
// });
 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchData);