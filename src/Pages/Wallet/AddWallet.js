import React, { useState } from 'react';
import { usePaystackPayment } from "react-paystack";
import './css/style.css';

const AddWallet = ({addWallet, setAddWallet}) => {

    const [amount, setAmount] = useState(0)

    const handleOnclick = () => {
        setAddWallet(false)
        const overlay = document.querySelector('.walletOverlay');
        overlay.classList.remove('show');
    } 

    return (
        <>
            <div className={addWallet ? `walletOverlay show` : 'walletOverlay' }>
                
                <div className="content">
                    <div  onClick={handleOnclick} className="close">X</div>
                    <h1>Fund Repify Wallet</h1>
                    <form>
                        <div className="input-group">
                            <label htmlFor="">HOW MUCH DO YOU WANT TO FUND?</label>
                            <input onChange= { (e) => {setAmount(e.target.value)}} type="number" name="amount"/>
                        </div>
                        <button type="submit">Fund</button>
                    </form>
                </div>
                
            </div>
        </>
    );
}

export default AddWallet;