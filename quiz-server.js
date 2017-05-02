var express = require('express'); 
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser')

var sports = []
var cartoons = []
var movies = []

app.use(express.static('public'))

//sports
var idx_sport = 0;

router.route('/sports') 	  
    .get(function(req, res) {    	
    	res.json(sports);
    })


	.post(function(req, res) { 
		var sport = {}; 
		sport.id = idx_sport++;
		sport.Question = req.body.Question
		console.log(req.body.Question)
		sport.Choice1 = req.body.Choice1
		sport.Choice2 = req.body.Choice2
		sport.Choice3 = req.body.Choice3
		sport.Choice4 = req.body.Choice4
		sport.Ans = req.body.Ans
		sports.push(sport); 
		res.json({message : 'Success'})
	}) 


router.route('/sports/:sport_id')
	.get (function(req,res) {
    	res.json(sports[req.params.sport_id])
    })

	.put (function(req,res) {
		var id = req.params.sport_id
        sports[id].Question = req.body.Question;  
        sports[id].Choice1 = req.body.Choice1;
        sports[id].Choice2 = req.body.Choice2;
        sports[id].Choice3 = req.body.Choice3; 
        sports[id].Choice4 = req.body.Choice4;
        sports[id].Ans = req.body.Ans;  
        res.json({ message: 'sport updated!' });        
     })

	.delete (function(req,res) {
		var id = req.params.sport_id
		delete 	sports[id]
        res.json({ message: 'sport deleted!' });        
    })

//cartoons
var idx_cartoon = 0;

router.route('/cartoons') 	  
    .get(function(req, res) {    	
    	res.json(cartoons);
    })


	.post(function(req, res) { 
		var cartoon = {}; 
		cartoon.id = idx_cartoon++;
		cartoon.Question = req.body.Question
		console.log(req.body.Question)
		cartoon.Choice1 = req.body.Choice1
		cartoon.Choice2 = req.body.Choice2
		cartoon.Choice3 = req.body.Choice3
		cartoon.Choice4 = req.body.Choice4
		cartoon.Ans = req.body.Ans
		cartoons.push(cartoon); 
		res.json({message : 'Success'})
	}) 


router.route('/cartoons/:cartoon_id')
	.get (function(req,res) {
    	res.json(cartoons[req.params.cartoon_id])
    })

	.put (function(req,res) {
		var id = req.params.cartoon_id
        cartoons[id].Question = req.body.Question;  
        cartoons[id].Choice1 = req.body.Choice1;
        cartoons[id].Choice2 = req.body.Choice2;
        cartoons[id].Choice3 = req.body.Choice3; 
        cartoons[id].Choice4 = req.body.Choice4; 
        cartoon[id].Ans = req.body.Ans; 
        res.json({ message: 'cartoon updated!' });        
     })

	.delete (function(req,res) {
		var id = req.params.cartoon_id
		delete 	cartoons[id]
        res.json({ message: 'cartoon deleted!' });        
    })

//movies
var idx_movie = 0;

router.route('/movies') 	  
    .get(function(req, res) {    	
    	res.json(movies);
    })


	.post(function(req, res) { 
		var movie = {}; 
		movie.id = idx_movie++;
		movie.Question = req.body.Question
		console.log(req.body.Question)
		movie.Choice1 = req.body.Choice1
		movie.Choice2 = req.body.Choice2
		movie.Choice3 = req.body.Choice3
		movie.Choice4 = req.body.Choice4
		movie.Ans = req.body.Ans
		movies.push(movie); 
		res.json({message : 'Success'})
	}) 


router.route('/movies/:movie_id')
	.get (function(req,res) {
    	res.json(movies[req.params.movie_id])
    })

	.put (function(req,res) {
		var id = req.params.movie_id
        movies[id].Question = req.body.Question;  
        movies[id].Choice1 = req.body.Choice1;
        movies[id].Choice2 = req.body.Choice2;
        movies[id].Choice3 = req.body.Choice3; 
        movies[id].Choice4 = req.body.Choice4; 
        movie[id].Ans = req.body.Ans; 
        res.json({ message: 'movie updated!' });        
     })

	.delete (function(req,res) {
		var id = req.params.movie_id
		delete 	movies[id]
        res.json({ message: 'movie deleted!' });        
    })


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }) 
});

app.use('/api', bodyParser.json(), router);  
 
app.use("*",function(req,res){
  res.status(404).send('404 Not found');
});

app.listen(50019, function() {
	console.log("Server is running")
});