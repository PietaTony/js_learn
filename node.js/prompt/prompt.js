var prompt = require('prompt');

prompt.start();

prompt.get(['cmd'],function(err,result){
	if(err){return onErr(err);}
	console.log(result.cmd);
})

function onErr(err){
	console.log(err);
	return 1;
}