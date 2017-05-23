var file = "Mentorlist.txt";
var peopleArray = [];

$.get(file, function(data){
  var lines = data.split("\n"); // creates array of each line

  for(var i = 0; i < lines.length; i++){
    if(lines[i] == ''){
      lines.splice(i,1); // remove blank
      lines.length = lines.length - 1; // reduce length
      i = i - 1; // check same index for repeating blank lines
    }
  }

  console.log(lines);
  var numOfPeople = lines.length/7; // 7 = num of lines per person
  alert(numOfPeople)

  //for(var i = 0; i < numOfPeople; i++){
  //    peopleArray[numOfPeople].name = lines[peopleIndex * 7];
  //    peopleArray[numOfPeople].pronouns = lines[peopleIndex * 7 + 1];
  //    peopleArray[numOfPeople].hometown = lines[peopleIndex * 7 + 2];
  //    peopleArray[numOfPeople].study = lines[peopleIndex * 7 + 3];
//      peopleArray[numOfPeople].involvmenet = lines[peopleIndex * 7 + 4];
//      peopleArray[numOfPeople].contact = lines[peopleIndex * 7 + 5];
//  }

  console.log(peopleArray);
});
