import React from "react";

/** 
 * Renders an empty state if the current user has no wallet history to display
 * This component is returned when the wallet object is epty
 */
const EmptyWallet = () => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flexWrapper">
                    <div className="emptyInfo">
                        <h3>You have no Benefactors</h3>
                        <p>You dont have any Benefactors yet. When
                       you do, they will appear here.
                       </p>
                    </div>
                    <div className="emptyImg">
                        <img src="https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg" alt="walletTableEmpty"></img>
                    </div>
                </div>
            </td>
        </tr>
    );
};

/** 
 * Renders table rows 
 * This component  recieves wallet object as "props" and creates a table row for each element
 */
const RenderTableRows = (props) => {
    const benefactor = props.benefactor;
    let statusIndicator = () => {
        switch (benefactor.details.status) {
            case "active":
                return //(<img src={images.active_state} alt="vector"></img>);
            case "not-active":
                return// (<img src={images.inactive_state} alt="vector"></img>);

            default:
                return //(<img src={images.active_state} alt="vector"></img>);
        }
    };
    return (
        <tr className="walletTableRows">
            <td>{(statusIndicator())} {benefactor.benefactor_name}</td>
            <td>{benefactor.benefactor_id}</td>
            <td>{benefactor.details.amount}</td>
            <td>{benefactor.details.pay_date}</td>
        </tr>
    );
};

const WalletTable = (props) => {
    const rows = [];

    var tableRows = () => {
        if (!props.wallet) {
            return <EmptyWallet />;
        } else {
            props.wallet.forEach((val) => {
                rows.push(<RenderTableRows wallet={val} key={val.name} />);
            });
            return rows;
        }
    };
    return (
        <table className="walletTable">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> User ID </th>
                    <th> Amount </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody className="walletTableBody">
                {tableRows()}
            </tbody>
        </table>
    );

};

export default WalletTable;