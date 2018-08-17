//Greeter.js
"use strict";

//iife
(function(global, $){
	//code
	var Greeter = function(firstname, lastname, language){
		//constructor
		return new Greeter.init(firstname, lastname, language);
		
		//prototype for all objects created
		Greeter.prototype = {};

		//init
		Greeter.init(firstname, lastname, language){
			var self = this;//TO DO: use a Call intead of self
			//default values
			self.firstname = firstname || '';
			self.lastname = lastname || '';
			self.language = language || 'en';
		}

		//all objects created by init will point to Greeter prototype
		Greeter.init.prototype = Greeter.prototype;

	}

	//expose, alias
	global.Greeter = global.G$ = Greeter;

})(window, JQuery);