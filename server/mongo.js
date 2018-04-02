const mongoose = require('mongoose');
const env = require('./environment/environment');

mongoose.Promise = global.Promise;

//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;

function connect() {
    return   mongoose.connect('mongodb://pitomci-db.documents.azure.com:10255/pitomci-db?ssl=true', {
        auth: {
          user: 'pitomci-db',
          password: '01yNUza2Mogc6hTgJLwL1Zld6Tekj22uqSbMKXAc85frRdYT64PLeTqA5Bww3ki36rvZMH4X6M7gtraxmi12HA=='
        }
      })
      .then(() => console.log('connection successful'))
      .catch((err) => console.error(err));
  }
module.exports = {
    connect,
    mongoose
};