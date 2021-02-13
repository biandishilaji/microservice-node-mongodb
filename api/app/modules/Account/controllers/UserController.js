const User = require('../models/User');

const baseController = require('../../../Http/Controllers/baseController.js')


module.exports = {
    async fetch(req, res) {
        try {

            const id = req.user.id

            const user = await User.findOne({id})

            return baseController.responseSucess(res, '', {user})
            // return res.send(req)
        } catch (e) {
            return baseController.responseError(res, e)
        }
    },

};
