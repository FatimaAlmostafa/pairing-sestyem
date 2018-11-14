var History = require('./History');

exports.create=function(req,res){
	var newPairing = {
		student1:req.body.student1,
		student2:req.body.student2
	}
	var pairing = new Pairing(newPairing);

	pairing.save(function(err,data){
		if(err){
			console.log("err in creat pairing");
		}else{
			res.send("created pairing sucssfully");
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
  }).pretty()
}
