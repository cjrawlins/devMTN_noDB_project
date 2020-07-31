const events = require('./data/noDB-json-test.json');

let id = 1100;

module.exports = {
    getEvents: (req, res) => {
        res.status(200).send(events);
    }


}