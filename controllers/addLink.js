const { Links } = require("../models/Links");

module.exports.addLink = async (req, res) => {

    let linkDetails = req.body.url;
    let randomString = (Math.random() + 1).toString(36).substring(7);
    if (linkDetails) {
        try {
            var url = new Links({
                original_url: linkDetails,
                short_url: randomString
            })
            var savedUrl = await url.save();
            if (savedUrl) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);

            }
        } catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    }
}