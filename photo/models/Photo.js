var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/photo_app',function(err)
	{
		if(err)
			console.log("err");
		else
			console.log("success connect to photo_app");
	});
//建立到localhost上的mongodb的连接,用photo_app作为数据库
var schema=new mongoose.Schema({
	name:String,
	path:String
});
module.export=mongoose.model('Photo',schema);