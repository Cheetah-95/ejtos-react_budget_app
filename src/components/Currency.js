import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const dropdownStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none"
}
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const setCurrency = (currencyType) => {
        const newCurrency = {
            value: currencyType.value,
            name: currencyType.name,
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }
    return (
        <div className='alert alert-secondary' style={{backgroundColor: "#92e499", color: 'white', border: 'none'}}>
            <span>
                Currency (
                <select value={currency.value} className="custom-select" style={dropdownStyle} onChange={(event) => setCurrency(event.target)}>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Rupee</option>
                </select>)
            </span>
        </div>
    );
};
export default Currency;