import React, { useState, useEffect } from "react";
import "./Wallet.css";
import WalletTable from "./WalletTable";
//import getTokenDetails from "./jwt";
//import Axios from "axios";

const Wallet = (props) => {

  // Wallet State management 
  const [wallet, setWallet] = useState(null);
  const [totalBenefactors, setTotalBenefactors] = useState(0);
  const [pendingRequest, setPendingRequest] = useState(0);
  const [totalBeneficiary, setTotalBeneficiary] = useState(0);


  // connect to back end and fetch all benefactors data for a user
  /**const fetchAllbenefactors = async () => {
    const token = await localStorage.getItem("UserToken");
    //const userInfo = await getTokenDetails(token);
   // const userId = userInfo.payload[0].id;

    await Axios.get()
      .then(async (res) => {
        const wallet = await res.data;
        if (wallet.data.length !== 0) {
          setWallet(wallet.data);
          setTotalBenefactors(Wallet.data.length);
        }
      })
      .catch((err) => {
        window.alert("Hoops!!!.. Some error occured please try again, make sure you're connected to internet");
      });

  };*/

  useEffect(() => {
    //fetchAllbenefactors();
  }, []);

  // Direct to add benefactors page
  const addBenefactorsHandler = () => {
      // Note 
  //  props.history.push("/dashboard/user/add/benefactor");
  };

  return (
    <div className="Wallet">
      <div className="grid-container">
        <div className="pageTitle row1-col1">
          <div className="H1"> Wallet</div>
          personal
        </div>
        <div className="addBenefactors-btn row1-col2">
          <button onClick={addBenefactorsHandler} >Add Benefactors</button>
          <div></div>
          <button onClick={addBenefactorsHandler} >Add beneficiaries</button>
          <di></di>
          <button onClick={addBenefactorsHandler} >Fund Wallet</button>
        </div>
        <div className="walletDetails row2-spanned-across-two-columns">
          <div className="walletBalance">
            <div className="space-div"> Wallet Balance</div>
            <div className="space-div">&#x20A6; {wallet} </div>
          </div>
          <div className="pendingRequest">
            <div className="space-div"> Pending Request </div>
            <div className="space-div">{pendingRequest}</div>
          </div>
          <div className="totalBenefactors">
            <div className="space-div"> Total Benefactors</div>
            <div className="space-div">{totalBenefactors}</div>
          </div>
          <div className="totalBeneficiary">
            <div className="space-div"> Total Beneficiary</div>
            <div className="space-div"> {totalBeneficiary}</div>
          </div>
        </div>
        <div className="walletTableWrapper row3-spanned-across-two-columns">
          <WalletTable benefactors={wallet} />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
