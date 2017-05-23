var file = "Mentorlist.txt";
var peopleArray = [];

$.get(file, function(data){
  var lines = data.responseText.split("\n");
  alert(lines);
});
