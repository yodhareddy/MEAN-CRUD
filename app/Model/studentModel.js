var mongoose = require('mongoose');
    //Define Model and studentrecords will be the name of the Collection (Export)
module.exports = mongoose.model('studentrecords',{
      firstName: String,
      lastName: String
    });
