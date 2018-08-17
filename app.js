//app.js
var g = G$('John', 'Doe');
console.log(g);
g.greet();//Hello John!
g.greet().greet(true);//Greetings, John Doe
g.greet().setLang('es').greet(true);//Saludos, John Doe
g.greet().setLang('fr').greet(true);//Invalid langage
