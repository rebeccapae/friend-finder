//Express App
var dependencies = require("../server");
var express = dependencies.express;
var path = dependencies.path;
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.get("/api/friends", function(req, res) {
    
});