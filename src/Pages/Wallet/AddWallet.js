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

    const reference = new Date().getTime();
  const apiKey = process.env.REACT_APP_ID;

  // Paystack Config
  const config = {
    reference,
    email: "Danireptor7@gmail.com",
    amount: amount * 100,
    publicKey: apiKey,
    metadata: {
      name: "Daniel",
      phone: "07037030402",
    },
    text: "Fund"
  };

//   const onSuccess = (data) => {
//     const userId = "blablabla";
//     const payload = {
//       reference: data.reference,
//       amount: amount
//     };
//     //Update API on success
//     Axios.post(`/transactions/credit_wallet?access_token=${token}&user_id=${userId}`, payload)
//       .then((res) => {
//         //implement toast on success
//       })
//       .catch((err) => err);
//   };

//   const onClose = () => {
//     // implementation for whatever you want to do when the Paystack dialog closed.
//   };
  

  const initializePayment = usePaystackPayment(config);

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