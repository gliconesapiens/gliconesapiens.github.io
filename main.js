 function random(){

$.get('/nouns.txt', function(response) {
  console.log('starting response noun')
  window.words = response.split('\n');
  console.log(window.words[0]);
  document.getElementById("one").innerHTML = window.words[Math.floor(Math.random() * window.words.length)];
})

console.log(window.words[0]);

$.get('/aa.txt', function(response) {
  console.log('starting response adj')
  window.adj = response.split('\n');
  console.log(window.adj[0]);
  document.getElementById("two").innerHTML = window.adj[Math.floor(Math.random() * window.adj.length)];
})
  console.log(window.adj[0]);
}
