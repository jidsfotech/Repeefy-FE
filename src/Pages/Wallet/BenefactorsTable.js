import React from "react";

/** 
 * Renders an empty state if the current user has no benefactor to display
 * This component is returned when the benefactor object is epty
 */
const NoBenefactorFound = () => {
    return (
        <tr>
            <td colSpan="4">
                <div className="flex-wrapper">
                    <div className="emptyInfo ">
                        <img src="https://res.cloudinary.com/repify/image/upload/v1607708782/You_have_no_Benefactors.png" alt="No benefactors yet"></img>
                    </div>
                    <div className="emptyImg ">
                        <img src="https://res.cloudinary.com/repify/image/upload/v1601862897/empty_state.svg" alt="no benefactor"></img>
                    </div>
                </div>
            </td>
        </tr>
    );
};

/** 
 * Renders table rows 
 * This component  recieves benefactor object as "props" and creates a table row for each element
 * creates a table row for each benefactor
 */
const RenderTableRows = (props) => {
    const benefactor = props.benefactor;
    let statusIndicator = () => {
        switch (benefactor.status) {
            case "active":
                return (<img src="https://res.cloudinary.com/repify/image/upload/v1603638053/active.png" alt="vector"></img>);
            case "not-active":
                return (<img src="https://res.cloudinary.com/repify/image/upload/v1603638053/Inactive.png" alt="vector"></img>);

            default:
                return (<img src="https://res.cloudinary.com/repify/image/upload/v1603638053/active.png" alt="vector"></img>);
        }
    };
    return (
        <tr className="benefactorsTableRows">
            <td>{(statusIndicator())} {benefactor.benefactor_name}</td>
            <td>{benefactor.benefactor_id}</td>
            <td>{benefactor.amount}</td>
            <td>{benefactor.date}</td>
        </tr>
    );
};

const RenderBenefactorsTable = (props) => {
    const rows = [];

    //return "NoBenefactorFound" component if "props === null". i.e if the current user has no benefactors
    var tableRows = () => {
        if (true) {
            return <NoBenefactorFound />;
        } else {
            props.benefactors.forEach((benefactor) => {
                rows.push(<RenderTableRows benefactor={benefactor} key={benefactor.benefactor_name} />);
            });
            return rows;
        }
    };
    return (
        <table className="benefactorsTable">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> User ID </th>
                    <th> Amount </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody className="benefactorsTableBody">
                {tableRows()}
            </tbody>
        </table>
    );

};

export default RenderBenefactorsTable;