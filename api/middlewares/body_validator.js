const joi = require("joi");

module.exports = (schema) => {
    return (req, res, next) => {
        joi.validate(req.body, schema, (error, data) => {
            if (error) {
                console.log(error.details[0].message);

                return res.status(403).send({
                    success: false,
                    message: error.details[0].message
                });
            }
            else {
                req.body = data;
                next();
            }
        })
    }
};