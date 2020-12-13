import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import "./css/style.css";

const AddWallet = ({ addWallet, setAddWallet }) => {
  const [amount, setAmount] = useState(0);
  const { addToast } = useToasts();

  const handleOnclick = () => {
    setAddWallet(false);
    const overlay = document.querySelector(".walletOverlay");
    overlay.classList.remove("show");
  };

  const reference = new Date().getTime();
  const apiKey = process.env.REACT_APP_ID;

  const setAmountHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  // Paystack Config
  const config = {
    reference,
    email: "danielbemsen@gmail.com",
    amount: amount * 100,
    publicKey: apiKey,
    metadata: {
      name: "Daniel Bemsen",
      phone: "07037030402",
    },
    text: "Fund",
  };

  const onSuccess = (data) => {
    if (data.status === "success") {
      //implement toast on success
      addToast(`Wallet Found of ${amount} was Successful`, {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast(`Wallet Found of ${amount} failed`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const onClose = () => {
    addToast(`Transaction Canceled`, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <>
      <div className={addWallet ? `walletOverlay show` : "walletOverlay"}>
        <div className="content">
          <div onClick={handleOnclick} className="close">
            X
          </div>
          <h1>Fund Repify Wallet</h1>
          <form>
            <div className="input-group">
              <label htmlFor="">HOW MUCH DO YOU WANT TO FUND?</label>
              <input
                onChange={(e) => setAmountHandler(e)}
                value={amount}
                type="number"
                name="amount"
              />
            </div>
          </form>
          <button
            className="BeneficiaryAdd"
            type="submit"
            onClick={() => {
              setAddWallet(false);
              initializePayment(onSuccess, onClose);
            }}
          >
            Fund
          </button>
        </div>
      </div>
    </>
  );
};

export default AddWallet;
