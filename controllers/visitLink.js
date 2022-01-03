const { Links } = require("../models/Links");

module.exports.visitLink = async (req, res) => {
    try {
        await Links.findOneAndUpdate({ short_url: req.params.slug }, { $inc: { 'clicks': 1 } }, function (err, result) {
            if (err) {
                throw err
            } else if (result) {
                var link = result['original_url'];
                res.redirect(link);
            }
        })
    } catch (e) {
        console.log(e);
    }
}