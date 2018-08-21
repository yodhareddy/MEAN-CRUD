//API Routes: (Export)
var Student = require('./Model/studentModel.js')
module.exports = function(app){

app.get('/api/todos',function(req,res){
  //Fetch all rows
  Student.find(function(err,response){
    if(err)
      res.send(err);
    res.json(response);

  });
});


app.post('/api/todos',function(req,res){
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }, function(err,student){
    if (err)
      res.send(err);
      Student.find(function(err,response){
        if(err)
          res.send(err);
        res.json(response);
      });
  });
});


app.delete('/api/todos/:sid',function(req,res){
  console.log(req.params.sid);
  Student.findByIdAndRemove({
    _id: req.params.sid
  }, function(err,student){

    if (err)
      res.send(err);
      Student.find(function(err,response){
        if(err)
          res.send(err);
        res.json(response);
      });


  });

});


app.get('*',function(req,res){
  res.sendfile('./public/index.html');
});
};
