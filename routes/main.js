module.exports = function(app)
{

  // Index routing
  app.get('/', function(req, res) {
    res.render('index.ejs');
  })

}