//app.js
var g = G$('John', 'Doe');
console.log(g);
g.greet();//Hello John!
g.greet().greet(true);//Greetings, John Doe
g.greet().setLang('es').greet(true);//Saludos, John Doe
//g.greet().setLang('fr').greet(true);//Invalid langage
g.greet().setLang('es').greet(true).log();//Inició sesión: John Doe


$('#login').click(function(){
	var gx = G$('Jane','Smith');
	$('#logindiv').hide();
	gx.setLang($('#lang').val()).HTMLgreeting('greeting',true).log();
});
