//Express App
var dependencies = require("../server");
var express = dependencies.express;
var path = dependencies.path;
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routes to home and survey

// to home
app.get("/", function(req, res) {
    res.sendFile("/Users/rebeccapae/Documents/Programming/Berkeley Bootcamp/Class_Homework/friend-finder/friend-finder/app/public/home.html")
});

// to survey
app.get("/survey", function(req, res) {
    res.sendFile("/Users/rebeccapae/Documents/Programming/Berkeley Bootcamp/Class_Homework/friend-finder/friend-finder/app/public/survey.html")
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

