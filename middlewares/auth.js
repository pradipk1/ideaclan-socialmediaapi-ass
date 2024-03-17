
const jwt = require('jsonwebtoken');
const config = require("../config/config");
const { User } = require('../models/User');

async function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;

    if(authorization) {

        // first validate the token

        const token = authorization.split(' ').pop();

        if(token) {
            try {
                jwt.verify(token, config.JWT_SECRET_KEY);
                
            } catch (err) {
                return res.status(401).send({
                    message: 'Invalid token provided'
                });
            }

            let user = jwt.decode(token);

            user = await User.findById(user._id);

            user = user.toJSON();
            
            delete user.password;

            // Modify the request object to contain the authenticated user
            req.user = user;

            next();

        } else {
            return res.status(401).send({
                message: 'No auth token present'
            });
        }
        
    } else {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
}


module.exports = authMiddleware;