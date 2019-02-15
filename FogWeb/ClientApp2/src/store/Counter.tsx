const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const initialState = { count: 10 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state:any, action:any) => {

  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, count: state.count + 20 };
  }

  if (action.type === decrementCountType) {
    return { ...state, count: state.counter - 1 };
  } 

  return state;
};
