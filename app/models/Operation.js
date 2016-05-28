// grab the mongoose module
var mongoose = require('mongoose');

// define Operation model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Operation', {
	operationId : {type : Number, default: 0},
	unpId : {type : Number, default: 0},
	type : {type : Number, default: 0},
	sum : {type : Number, default: 0},
	description: {type : String, default: ''},
	date : {type : Number, default: 0}
});
