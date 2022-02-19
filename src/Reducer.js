import { useReducer } from "react";



function reducer_effect(state, action){
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}



function Reducer() {

    const initialState = { count: 0};

    const [state, dispatch] = useReducer(reducer_effect, initialState);
    
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    );
}

export default Reducer;