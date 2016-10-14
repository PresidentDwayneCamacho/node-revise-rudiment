/*
	Obtains user and browser information 
	(for future use)
*/


var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

fuction printCookie(req, res){
  console.log('Cookies: ', req.cookies)
}

app.get('/', printCookie(req, res))

app.listen(globalPort)															//global port initialized in server.js