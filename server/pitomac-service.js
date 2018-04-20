const Pitomac = require('./pitomacModel');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res){
    const docquery = Pitomac.find({}).read(ReadPreference.NEAREST);
    docquery.exec().then(pitomci => res.json(pitomci)).catch( err => {
        res.status(500).send(err);
    });
}
function create(req, res){

    const {id,name} = req.body;
    const pitomac = new Pitomac({id, name});

    pitomac.save().then(() => {
        re.json(hero);
    }).catch(err=> {
        res.status(500).send(err);
    })

}
module.exports = {
   get,
   create
};