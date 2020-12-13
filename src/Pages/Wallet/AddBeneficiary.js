import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router";
import { useToasts } from "react-toast-notifications";
import axios from 'axios';
import "./css/addBeneficiary.css";

const AddBeneficiary = (props) => {
  // States

  const [duration, setDuration] = useState("DEFAULT");
  const { register, handleSubmit, errors } = useForm();
  const [successStatus, setSuccessStatus] = useState(false);
  const [failedStatus, setFailedStatus] = useState(false);

  // Hooks
  const { addToast } = useToasts();

  // Controllers

  const handleSuccess = () => {
    setSuccessStatus(!successStatus);
  };

  const handleSuccessMessage = (message) => {
    addToast(message, { appearance: "success", autoDismiss: true });
    setTimeout(() => {
        props.history.replace("/dashboard");
    }, 6000);
  };

  const handleFailed = () => {
    setFailedStatus(!failedStatus);
  };

  const handleFailedMessage = (message) => {
    addToast(message, { appearance: "error", autoDismiss: true });
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const onSubmit = (data) => {
    const token = localStorage.getItem("UserToken");
    return axios.post(`https://repify-demo-api.herokuapp.com/api/beneficiary?access_token=${token}`, data)
      .then((res) => {
        handleSuccessMessage(
          `Successfully added ${data.beneficiary_email} as a beneficiary`
        );
        handleSuccess();
      })
      .catch((err) => {
        if (err.response.data.hasOwnProperty("message")) {
          return (
            handleFailedMessage(err.response.data.message) && handleFailed()
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
      {/* Add Beneficiary Container */}
      <div className="AddBeneficiary">
        <h2 className="HeroTitle">Add Beneficiary</h2>
          <div className="BeneficiaryWrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="FlexWrapper MarginTop4">
                <aside className="LeftWrapper">
                  <div className="EditHero">
                    <h4 className="SmallHeading">Please Fill the form below</h4>
                  </div>

                  <input
                    type="email"
                    className="BeneficiaryContent EditInputs Bene"
                    name="beneficiary_email"
                    placeholder="Beneficiary Email"
                    ref={register({ required: true })}
                  />
                  <input
                    type="number"
                    className="BeneficiaryContent EditInputs Bene"
                    ref={register({ required: true, pattern: /\d+/ })}
                    min="1"
                    max="28"
                    name="pay_date"
                    placeholder="When should we pay? (1st - 28th)"
                  />
                  <select
                    className="BeneficiarySelect EditInputs Bene"
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
                  <input
                    ref={register({ required: true })}
                    type="number"
                    className="BeneficiaryContent EditInputs Bene"
                    placeholder="How much should we send?"
                    name="amount"
                  />
                  {errors.amount && "An amount is required."}
                  <input
                    ref={register({ required: true })}
                    type="text"
                    className="BeneficiaryContent EditInputs Bene"
                    placeholder="What is it for?"
                    name="title"
                  />
                </aside>
                <aside className="RightSide">
                  <div className="Notes">
                    <h5 className="NoteH">Note</h5>
                    <p className="NotesP">
                      Adding a user as a beneficiary means the users will get
                      the amount
                    </p>
                  </div>
                  <input type="submit" className="BeneficiaryAdd" />
                </aside>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default withRouter(AddBeneficiary);
