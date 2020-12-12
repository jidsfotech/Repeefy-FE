import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './css/addBeneficiary.css';

const AddWallet = ({addBeneficiary, setAddBeneficiary}) => {

    const { register, handleSubmit, errors } = useForm();
    const [duration, setDuration] = useState("DEFAULT");
    const [successStatus, setSuccessStatus] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [failedStatus, setFailedStatus] = useState(false);
    const [failedMessage, setFailedMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://repify-demo-api.herokuapp.com/api/beneficiary`).then((res) => {
            let data = res.data
            setData(data);
        })
    }, [])

    const handleOnclick = () => {
        setAddBeneficiary(false)
        const overlay = document.querySelector('.walletOverlay');
        overlay.classList.remove('show');
    } 

    const handleSuccess = () => {
        setSuccessStatus(!successStatus);
    };

    const handleSuccessMessage = (message) => {
        setSuccessMessage(message);
    };

    const handleFailed = () => {
        setFailedStatus(!failedStatus);
    };

    const handleFailedMessage = (message) => {
        setFailedMessage(message);
    };

    const handleDuration = (e) => {
        setDuration(e.target.value);
    };

    const onSubmit = (data) => {
        const token = localStorage.getItem("UserToken");
        console.log('clicked')
        return axios.post(`https://repify-demo-api.herokuapp.com/api/beneficiary?access_token=${token}`, data)
          .then((res) => {
            window.alert('success')
            setAddBeneficiary(false)
            handleSuccessMessage(
              `Successfully added ${data.beneficiary_email} as a beneficiary`
            );
            handleSuccess();
          })
          .catch((err) => {
            if (err.response.data.hasOwnProperty("message")) {
              return (
                window.alert('false'),
                setAddBeneficiary(false),
                  console.log(err.response.data.message),
                  handleFailedMessage(err.response.data.message),
                   handleFailed()
              );
            }
            return (
                handleFailedMessage("Something Doesn't seem right, try again"),
                 handleFailed()
            );
          });
      };

    return (
        <>
            <div className={addBeneficiary ? `walletOverlay show` : 'walletOverlay' }>
                
                <div className="content">
                    <div  onClick={handleOnclick} className="close">X</div>
                    <h1>Add Beneficiary</h1>
                    <div className="BeneficiaryInput">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="BeneficiaryLabel">
                            Beneficiaries Email
                            <input
                                ref={register({ required: true })}
                                type="text"
                                className="BeneficiaryContent"
                                name="beneficiary_email"
                                placeholder="Users Email or Repify ID"
                            />
                            {errors.beneficiary_email && "Email or Id is required."}
                            </label>
                            <label className="BeneficiaryLabel">
                            When should we pay?
                            </label>
                            <input
                                ref={register({ required: true, pattern: /\d+/ })}
                                type="number"
                                min="1"
                                max="28"
                                className="BeneficiaryContent"
                                placeholder="Day in a month (1st - 28th)"
                                name="pay_date"
                            />
                            {errors.pay_date && "Please enter day between 1 - 28"}
                            <label className="BeneficiaryLabel">
                            Duration
                            <select
                                className="BeneficiarySelect"
                                name="duration"
                                ref={register({ required: true })}
                                value={duration}
                                onChange={handleDuration}
                            >
                                <option value="DEFAULT" name="DEFAULT" disabled>
                                Select a duration
                                </option>
                                <option value="one_month" name="one_month">
                                One Month
                                </option>
                                <option value="three_months" name="three_months">
                                Three Months
                                </option>
                                <option value="six_months" name="six_months">
                                Six Months
                                </option>
                                <option value="one_year" name="one_year">
                                One Year
                                </option>
                                <option value="recursive" name="recursive">
                                Recursive
                                </option>
                            </select>
                            </label>
                            <label className="BeneficiaryLabel">
                            Amount
                            <input
                                ref={register({ required: true })}
                                type="number"
                                className="BeneficiaryContent"
                                placeholder="How much should we send?"
                                name="amount"
                            />
                            {errors.amount && "An amount is required."}
                            </label>
                            <label className="BeneficiaryLabel">
                            Description
                            <input
                                ref={register({ required: true })}
                                type="text"
                                className="BeneficiaryContent"
                                placeholder="What is it for?"
                                name="title"
                            />
                            {errors.tag && "Please enter a description"}
                            </label>
                            <input
                            type="submit"
                            className="BeneficiaryBtn"
                            />
                        </form>
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default AddWallet;