 function random(){

var words = [];
var adj = [];

$.get('/nouns.txt', function(response) {
  console.log('starting response noun')
  words = response.split('\n');
  console.log(words[0])
  document.getElementById("one").innerHTML = words[Math.floor(Math.random() * words.length)];
})
  
  console.log(words[0])
  
$.get('/aa.txt', function(response) {
  console.log('starting response adj')
  adj = response.split('\n');
  console.log(words[0])
  document.getElementById("two").innerHTML = adj[Math.floor(Math.random() * adj.length)];
})
  


}
