var club = require('../app/controllers/club');

//you can include all your controllers

module.exports = function (app)
 {
	 app.get('/club', club.index);
   

}
