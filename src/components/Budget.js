import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
      }, [budget]);
     
     
      useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => {
          return (total += item.cost);
        }, 0);
     
        if (newBudget >= 20000) {
          alert('Budget cannot exceed 20,000!');
        }
     
     
        if (newBudget < totalExpenses) {
          alert('You cannot reduce the budget value lower than the spending');
        }
      }, [newBudget, expenses, dispatch]);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value)
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
    }

    return (
        <div className='alert alert-secondary'>
            <div className='input-group'>
       <div className='input-group-prepend'>
            <span>Budget: {currency}</span>
            <input
                        type='number'
                        value={newBudget}
                        onChange={handleBudgetChange}
                        step={10}
                        max={20000}
                        
                        >
                        </input>
                        </div>
                        </div>
        </div>
    );
};
export default Budget;
