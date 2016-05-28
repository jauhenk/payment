// grab the mongoose module
var mongoose = require('mongoose');

// define Agent model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Agent', {
	unpId : {type : Number, default: 0},
	name : {type : String, default: ''},
	address : {type : String, default: ''},
	contract : {type : String, default: ''},
	paymentDelay : {type : Number, default: 30}
});
