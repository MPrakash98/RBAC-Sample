const jwt = require('jsonwebtoken');
const responder = require('../helper/responder');
const models = require('../models');

// Middleware function used for checking if user is logged or not
exports.checkLogin = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) res.status(401).send({ message: "Please Add token" });
    jwt.verify(token, 'secret', (err, user) => {
        if (err) res.status(403).send({ message: "Invalid Token", invalid_token: 1 });
        req.user = user
        next();
    })
}

// Function for updating the request
exports.setPermissionSlug = (slug) => {
    return (req, res, next) => {
        req.permissionSlug = slug;
        next();
    };
};

// Function for checking the permission
exports.checkPermission = async function (req, res, next) {
    const pSlug = req.permissionSlug;
    const user = req.user
    const actions = await checkActionPermission(pSlug);
    const isValidPage = user?.Role?.rules?.includes(actions?.id);
    return isValidPage ? next() : responder.forbidden(res);
}

// Function for checking permissiohn in database
async function checkActionPermission(slug) {
    return new Promise(async function (resolve, reject) {
        models.Permission.findOne({
            where: { isDeleted: 0, status: 1, actionSlug: slug }
        }).then(actions => {
            resolve(actions);
        }).catch(err => {
            reject(err);
        });
    })
}

