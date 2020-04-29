 $( document ).ready(function random(){

$.get('/nouns.txt', function(response) {
  console.log('starting response noun')
  window.words = response.split('\n');
  window.current_word = window.words[Math.floor(Math.random() * window.words.length)];
  //document.getElementById("one").innerHTML = window.words[Math.floor(Math.random() * window.words.length)];
})
  console.log(window.current_word);

$.get('/aa.txt', function(response) {
  console.log('starting response adj')
  window.adj = response.split('\n');
  window.current_adj = window.adj[Math.floor(Math.random() * window.adj.length)];
  //document.getElementById("two").innerHTML = window.adj[Math.floor(Math.random() * window.adj.length)];
})
  console.log(window.current_adj);
  
  document.getElementById("one").innerHTML = window.current_word.concat(" ", window.current_adj)
});
