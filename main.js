 function random(){

var words = [];

$.get('/aa.txt', function(response) {
  console.log('starting response')
  words = response.split('\n');
  console.log(words[0])
  document.getElementById("one").innerHTML = words[Math.floor(Math.random() * words.length)];
})


}
