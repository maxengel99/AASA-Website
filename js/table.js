var file = "Mentorlist.txt";
var peopleArray = [];

$.get(file, function(data){
  var lines = data.split("\n"); // creates array of each line

  for(var i = 0; i < lines.length; i++){
    if(/^\s*$/.test(lines[i])){
      lines.splice(i,1);  // remove blank indexes
      i--;  // check same index for repeating blank lines
    }
  }

  console.log(lines);
  var numOfPeople = (lines.length+1)/6 - 1; // 6 = num of lines per person

  for(var i = 0; i < numOfPeople; i++){
      peopleArray[i] = {
        fullname: lines[i * 6],
        pronouns: lines[i * 6 + 1],
        hometown: lines[i * 6 + 2],
        study: lines[i * 6 + 3],
        involvement: lines[i * 6 + 4],
        contact: lines[i * 6 + 5]
      }
  }

  // sort people by alphabetical order
  peopleArray.sort(function(a,b) {
    var afullname = a.fullname.toLowerCase();
    var bfullname = b.fullname.toLowerCase();

    if(afullname < bfullname) {
      return -1;
    }

    if(afullname > bfullname) {
      return 1;
    }

    return 0;
  });

  console.log(peopleArray);

  /* Comment out table creator
  for(var i = 0; i < numOfPeople; i++){
    $('#mentor-table').append("<tr><td>" + peopleArray[i].fullname + "</td><td>" + peopleArray[i].pronouns + "</td><td>"
    + peopleArray[i].hometown + "</td><td>" + peopleArray[i].study + "</td><td>" + peopleArray[i].involvement + "</td><td>"
    + "<a href=\"malto:" + peopleArray[i].contact + "\" target=\"_blank\"><img alt=\"Contact\" src=\"../img/mail-clipart.png\"></a></td></tr>");

    //<td><a href="malto:maxengel99@gmail.com" target="_blank"><img alt="Contact" src="img/mail-clipart.png"></a></td> -->

  }*/

  for(var i = 0; i < numOfPeople; i++){
    console.log("test");
    $('#mentor-grid').append("<div class=\"box\"><h2>" + peopleArray[i].fullname + "</h2><ul><li>" + peopleArray[i].pronouns +
    "</li><li>" + peopleArray[i].hometown + "</li><li>" + peopleArray[i].study + "</li><li>" + peopleArray[i].involvement +
    "</li><li><a href=\"malto:" + peopleArray[i].contact + "\" target=\"_blank\"><img alt=\"Contact\" src=\"../img/mail-clipart.png\"><p>
    Contact Me</p></a></li></ul></div>");
  }

});
