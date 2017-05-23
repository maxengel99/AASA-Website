var file = "Mentorlist.txt";
var peopleArray = [];

//$.get(file, function(data){
//  alert(data);
//});

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", file, false);
if(xmlhttp.readyState == 4){
  var text = xmlhttp.responseText;
  alert(text);
}

alert(xmlhttp.readyState == 4);
