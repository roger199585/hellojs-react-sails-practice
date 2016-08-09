/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
		var name = req.param('name')
		console.log(req.allParams())
		User.create({name})
			.then(function(user) {
				res.redirect("/user")
			})
	}
};

