const { Links } = require("../models/Links")

module.exports.allUrls = async (req, res) => {
    Links.find({  }, null, { sort: { date: -1 } }, function (err, output) {
        if (err) {
            throw err;
        } else {
            res.json(output);
        }
    })
}