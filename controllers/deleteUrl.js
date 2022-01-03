const { Links } = require("../models/Links")

module.exports.deleteUrl = async (req, res) => {

    try {
        Links.findOneAndRemove({ short_url: req.params['slug'] }, function (err, a) {
            if (!err) {
                res.sendStatus(200);

            } else {
                throw err;
            }
        })

    } catch (e) {
        res.sendStatus(404);

        console.log(e);
    }
}