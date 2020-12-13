import React, { useState, useEffect } from "react";
import "./Wallet.css";
import "./Benefactors.css";
import "./Beneficiaries.css";
import BenefactorsTable from "./BenefactorsTable";
import BeneficiariesTable from "./BeneficiriesTable";
import {
  benefactorsMockData,
  beneficiariesMockData
} from "./data";
//import getTokenDetails from "./jwt";
//import Axios from "axios";

const Wallet = (props) => {

  // Wallet State management 
  const [wallet, setWallet] = useState(null);
  const [totalBenefactors, setTotalBenefactors] = useState(0);
  const [pendingRequest, setPendingRequest] = useState(0);
  const [totalBeneficiary, setTotalBeneficiary] = useState(0);
  const [benefactors, setBenefactors] = useState(null)
  const [beneficiaries, setBeneficiaries] = useState(null)
  const [showBeneficiariesTable, setShowBeneficiariesTable] = useState(false)


  // connect to back end and fetch all benefactors data for a user
  const fetchAllbenefactors = async () => {
    setBenefactors(beneficiariesMockData)
    setTotalBenefactors(benefactorsMockData.length)
    setTotalBeneficiary(beneficiariesMockData.length)
    //const token = await localStorage.getItem("UserToken");
    //const userInfo = await getTokenDetails(token);
    // const userId = userInfo.payload[0].id;

    /**await Axios.get()
      .then(async (res) => {
        const wallet = await res.data;
        if (wallet.data.length !== 0) {
          setWallet(wallet.data);
          setTotalBenefactors(Wallet.data.length);
        }
      })
      .catch((err) => {
        window.alert("Hoops!!!.. Some error occured please try again, make sure you're connected to internet");
      });*/

  };

  useEffect(() => {
    fetchAllbenefactors();
  }, []);

  // Direct to add benefactors page
  const addBenefactorsHandler = () => {
    // Note 
    //  props.history.push("/dashboard/user/add/benefactor");
  };

  const displayBeneficiariesTable = () => {
    document.getElementById("totalBeneficiary").style.background = "#32E0C4"
    document.getElementById("totalBenefactors").style.background = "#F9FAFA"
    setShowBeneficiariesTable(true);
    setBeneficiaries(beneficiariesMockData)
    setBenefactors(null)
  }

  const displayBenefactorsTable = () => {
    document.getElementById("totalBenefactors").style.background = "#32E0C4"
    document.getElementById("totalBeneficiary").style.background = "#F9FAFA"
    setShowBeneficiariesTable(false);
    setBeneficiaries(null)
    setBenefactors(benefactorsMockData)
  }

  return (
    <div className="Wallet">
      <div className="grid-container">
        <div className="row1-col1">
          <div className="pageTitle">
            <div className="H1"> Wallet</div>
            personal
        </div>
          <div className="action-btn">
            <button onClick={addBenefactorsHandler} >Add Benefactors</button>
            <div></div>
            <button onClick={addBenefactorsHandler} >Add beneficiaries</button>
            <di></di>
            <button onClick={addBenefactorsHandler} >Fund Wallet</button>
          </div>
        </div>
        <div className="walletDetails row2-spanned-across-two-columns">
          <div className="walletBalance info-tab">
            <div > Wallet Balance</div>
            <div >&#x20A6; 7000 </div>
          </div>
          <div className="pendingRequest info-tab">
            <div > Pending Request </div>
            <div >{pendingRequest}</div>
          </div>
          <div className="totalBeneficiary info-tab" onClick={displayBeneficiariesTable} id="totalBeneficiary">
            <div > Total Beneficiary</div>
            <div > {totalBeneficiary}</div>
          </div>
          <div className="totalBenefactors " onClick={displayBenefactorsTable} id="totalBenefactors">
            <div > Total Benefactors</div>
            <div >{totalBenefactors}</div>
          </div>
        </div>
        <div className="TableWrapper row3-spanned-across-two-columns" >
          {showBeneficiariesTable ?
            <BeneficiariesTable beneficiaries={beneficiaries} /> :
            <BenefactorsTable benefactors={benefactors} />
          }
        </div>
      </div>
    </div>
  );
};

export default Wallet;
