module.exports = {
    api_base_url: "https://repify-demo-api.herokuapp.com",
    authKey: process.env.AUTH_KEY || "secretKeyRef",
    userType: {
        personal: "Personal",
        company: "Company"
    },
    beneficiary_error_message: "beneficiary does not exist"
};