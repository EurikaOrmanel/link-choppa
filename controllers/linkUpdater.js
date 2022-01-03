const { Links } = require("../models/Links");

module.exports.linkUpdater = (req, res) => {
    var update = Object();
    update['original_url'] = req.body.url;
    update['mutated_at'] = Date.now();
    try {
        Links.findOneAndUpdate({ short_url: req.params.slug }, update, function (err, data) {
            if (err) {
                throw err;

            } else {
                res.sendStatus(200)
            }
        })
    } catch (e) {
        res.sendStatus(404);

    }
}