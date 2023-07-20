import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {

 const { currency, dispatch } = useContext(AppContext);
 
 const handleCurrencyChange = (event) => {

   const selectedCurrency = event.target.value;
   
   dispatch({
     type: 'CHG_CURRENCY',
     payload: selectedCurrency,
   });

 };


 return (
   <div className='alert alert-secondary'>
          <select className="custom-select" id="currencyGroupSelect" onChange={handleCurrencyChange}>
                <option className="currency-default" value="default" hidden>{`Currency (${currency} Pound)`}</option>
                <option className="currency-other" value='$' name="Dollar">$ Dollar</option>
                <option className="currency-other" value='£' name="Pound">£ Pound</option>
        		<option className="currency-other" value='€' name="Euro">€ Euro </option>
        		<option className="currency-other" value='₹' name="Rupee">₹ Rupee</option>
              </select>
   </div>
 );
};

export default Currency;