var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/Assi4_2.html',function(req,res){
	res.sendFile('C:\Users\omkar\OneDrive\Desktop\Express\node_modules\express\ASS 4Q2 recipe book\Assi4_2.html');
});
app.get('/redirect_demo',function(req,res){
	if(req.query.recipe_name=="ChickenBiryani")
	{
		res.redirect('/chicken');
	}
	else if(req.query.recipe_name=="Veg manchurian")
	{
		res.redirect('/manchurian');
	}
	else
	{
		res.send("Recipe Not Found");
	}
});
app.get('/chicken',function(req,res){
	res.sendFile('C:\Users\omkar\OneDrive\Desktop\Express\node_modules\express\ASS 4Q2 recipe book\chicken.html');
});
app.get('/manchurian',function(req,res){
	res.sendFile('C:\Users\omkar\OneDrive\Desktop\Express\node_modules\express\ASS 4Q2 recipe book\manchurian.html');
});
app.listen(5000,()=>
{
console.log('Server started on port 5000');
});
