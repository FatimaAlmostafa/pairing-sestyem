var History = require('./History');

exports.create=function(req,res){
	console.log('history ', req.body['pairsToSend[]'])
	var pairing = new History({
		pairs:req.body['pairsToSend[]']
	});

	pairing.save(function(err,data){
		if(err){
			console.log("err in creat pairing");
		}else{
			res.send(data);
		}
	})
}


exports.retrieve=function(req,res){
  History.find({},function(err,data){
  	if(err){
  			console.log("wrong in find history");
  		}else{
  			res.send(data);
  		}
  })
}
