//Greeter.js
"use strict";

//iife
(function(global, $){
	//code
	var Greeter = function(firstname, lastname, language){
		//constructor
		return new Greeter.init(firstname, lastname, language);
		
		var supportedLangs = ['en', 'es'];

		var greetings = {
			en: 'Hello',
			es: 'Hola'
		}

		var formalGreetings = {
			en: 'Greetings',
			es: 'Saludos'
		}

		var logMessages = {
			en: 'Logged In',
			es: 'Inició Sesión'
		}

		//prototype for all objects created
		Greeter.prototype = {
			fullName : function(){
				return this.firstname+' '+this.lastname;
			},
			validate: function(){
				if(supportedLangs.indexOf(this.language)=== -1){
					throw "invalid language";
				}
			},
			greeting: function(){
				return greetings[this.language]+' '+this.firstname+'!';
			},
			formalGreeting: function(){
				return formalGreetings[this.language]+', '+this.fullName();
			}
		};

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