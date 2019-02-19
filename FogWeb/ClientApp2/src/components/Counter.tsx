import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/counter'; 
import { stat } from 'fs';

interface Props {
  count: number,
  increment: () => void;
}
  
const Counter: React.StatelessComponent<any> = props => {
  console.log(props.count); 
  
  return (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>Current count: <strong>{props.count}</strong></p>

    <button className="btn btn-primary" onClick={props.increment}>Increment</button>
  </div>
)};

export type State = { 
    counter: any
} 

// const mapStateToProps = (state: State) => state.counter; 
const mapStateToProps = function(state: State) {

  const {count} = state.counter;
  return {count};
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ 
  increment: () => dispatch(actionCreators.increment())
});
 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// export default connect(
//   state => state.counter,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(Counter);
