import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const changeBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.value}</span>
            <input
                type='number'
                id='cost'
                step="10"
                value={budget}
                style={{ marginLeft: '0rem', size: 10 }}
                onChange={(event) => changeBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
