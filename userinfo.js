/*
	Obtains user and browser information 
	(for future use)
*/


var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
})

app.listen(globalPort)															//global port initialized in server.js