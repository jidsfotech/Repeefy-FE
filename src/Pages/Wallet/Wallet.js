import React, { useState, useEffect } from "react";
import "./Wallet.css";
import AddWallet from "./AddWallet";
import AddBeneficiary from "./AddBeneficiary";
import "./Benefactors.css";
import "./Beneficiaries.css";
import BenefactorsTable from "./BenefactorsTable";
import BeneficiariesTable from "./BeneficiriesTable";
import {
  benefactorsMockData,
  beneficiariesMockData
} from "./data";
import { withRouter } from "react-router";

//import getTokenDetails from "./jwt";
//import Axios from "axios";

const Wallet = (props) => {

  // Wallet State management 
  const [totalBenefactors, setTotalBenefactors] = useState(0);
  const [pendingRequest, setPendingRequest] = useState(0);
  const [totalBeneficiary, setTotalBeneficiary] = useState(0);
  const [addWallet, setAddWallet] = useState(false);
  const [addBeneficiary, setAddBeneficiary] = useState(false);
  const [benefactors, setBenefactors] = useState(null)
  const [beneficiaries, setBeneficiaries] = useState(null)
  const [showBeneficiariesTable, setShowBeneficiariesTable] = useState(false)


  // connect to back end and fetch all benefactors data for a user
  const fetchAllbenefactors = async () => {
    setBenefactors(benefactorsMockData)
    setTotalBenefactors(benefactorsMockData.length)
    setTotalBeneficiary(beneficiariesMockData.length)
  };

  useEffect(() => {
    fetchAllbenefactors();
  }, []);

  const addBeneficiaryHandler = () => {
    props.history.push("/addbeneficiary");
  }

  const addWalletHandler = () => {
    setAddWallet(!addWallet);
  }

  const displayBeneficiariesTable = () => {
    setShowBeneficiariesTable(true);
    setBeneficiaries(beneficiariesMockData)
    setBenefactors(null)
  }

  const displayBenefactorsTable = () => {
    setShowBeneficiariesTable(false);
    setBeneficiaries(null)
    setBenefactors(benefactorsMockData)
  }

  return (
    <div className="Wallet">
      <div className="grid-container">
        <div className="pageTitle row1-col1">
          <div className="H1"> Wallet</div>
          personal
        </div>
        <div className="action-btn row1-col2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button onClick={addBeneficiaryHandler} >Add beneficiaries</button>
          <di></di>
          <button onClick={addWalletHandler} >Fund Wallet</button>
        </div>
        <div className="walletDetails row2-spanned-across-two-columns">
          <div className="walletBalance">
            <div className="space-div"> Wallet Balance</div>
            <div className="space-div">&#x20A6; 0.00 </div>
          </div>
          <div className="pendingRequest">
            <div className="space-div"> Pending Request </div>
            <div className="space-div">{pendingRequest}</div>
          </div>
          <div className="totalBenefactors" onClick={displayBenefactorsTable}>
            <div className="space-div"> Total Benefactors</div>
            <div className="space-div">0</div>
          </div>
          <div className="totalBeneficiary" onClick={displayBeneficiariesTable}>
            <div className="space-div" > Total Beneficiary</div>
            <div className="space-div"> 0</div>
          </div>
        </div>
        <div className="TableWrapper" >
          {showBeneficiariesTable ?
            <BeneficiariesTable beneficiaries={beneficiaries} /> :
            <BenefactorsTable benefactors={benefactors} />
          }
        </div>
      </div>
      <AddWallet addWallet={addWallet} setAddWallet={setAddWallet} />
      <AddBeneficiary addBeneficiary={addBeneficiary} setAddBeneficiary={setAddBeneficiary} />
    </div>
  );
};

export default withRouter(Wallet);
