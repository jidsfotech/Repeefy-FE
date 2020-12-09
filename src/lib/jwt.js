const jwt = require("jsonwebtoken");
const config = require("./config");

const getTokenDetails = async(token) => {
    return new Promise(async (resolve, reject) => {
        return await jwt.verify(token, config.authKey, (err, decoded) => {   
            if (err) {
                return reject(false);
            } else {
                return resolve(decoded);
            }
        });     
    });
};


export default getTokenDetails;