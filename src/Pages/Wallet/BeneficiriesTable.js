import React from "react";

/** 
 * Renders an empty state if the current user has no beneficiaries to display
 * This component is returned when the beneficiaries object is empty
 */
const NoBeneficiariesFound = (props) => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flexWrapper">
                    <div className="emptyInfo">
                        <h6>You have no Beneficiaries</h6>
                        <div></div>
                        <div className="action-btn"><button onClick={props.addBeneficiariesHandler}>Add them</button></div>
                    </div>
                    <div className="emptyImg">
                        <img src="https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg" alt="beneficiariesTableEmpty"></img>
                    </div>
                </div>
            </td>
        </tr>
    );
};

/** 
 * Renders table rows 
 * This component  recieves beneficiaries object as "props" and creates a table row for each element
 * creates a table row for each beneficiaries
 */
const RenderTableRows = (props) => {
    const beneficiary = props.beneficiary;
    let statusIndicator = () => {
        //  (NOTE*** this is in anticipation because Im not sure whats coming from the databese**/)
        switch (beneficiary.status) {
            case "inactive":
                return (<div className="beneficiary-status" style={{ background: "yellow" }}></div>);
            case "failed":
                return (<div className="beneficiary-status" style={{ background: "red" }}></div>);
            case "active":
                return (<div className="beneficiary-status" style={{ background: "green" }}></div>);
            default:
                return (<div className="beneficiary-status" style={{ background: "green" }}></div>);
        }
    };
    return (
        <tr className="beneficiariesTableRows">
            <td>{beneficiary.name}</td>
            <td>{beneficiary.userID}</td>
            <td>{beneficiary.amount}</td>
            <td>{beneficiary.date}</td>
            <td>{(statusIndicator())}</td>
        </tr>
    );
};

const RenderBeneficiariesTable = (props) => {
    const rows = [];
    var tableRows = () => {
        //Here Im only returing the empty state componenet until Im sure of the data coming from the database (Note**to be removed)
        //return <NoBeneficiariesFound addBeneficiariesHandler={props.addBeneficiariesHandler} />;

        if (true) {
             return <NoBeneficiariesFound addBeneficiariesHandler ={props.addBeneficiariesHandler}/>;
 
         } else {
             props.beneficiaries.forEach((beneficiary) => {
                 rows.push(<RenderTableRows beneficiary={beneficiary} key={beneficiary.beneficiary_name}  />);
             });
             return rows;
         }
    };
    return (
        <table className="beneficiariesTable">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> User ID </th>
                    <th> Amount </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody className="beneficiariesTableBody">
                {tableRows()}
            </tbody>
        </table>
    );

};

export default RenderBeneficiariesTable;