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
  var numOfPeople = (lines.length+1)/6; // 6 = num of lines per person
  alert(numOfPeople)

  for(var i = 0; i < numOfPeople; i++){
      peopleArray[numOfPeople].fullname: lines[numOfPeople * 7],
      peopleArray[numOfPeople].pronouns: lines[numOfPeople * 7 + 1],
      peopleArray[numOfPeople].hometown: lines[numOfPeople * 7 + 2],
      peopleArray[numOfPeople].study: lines[numOfPeople * 7 + 3],
      peopleArray[numOfPeople].involvmenet: lines[numOfPeople * 7 + 4],
      peopleArray[numOfPeople].contact: lines[numOfPeople * 7 + 5]
  }

  peopleArray.sort(function(a,b) {
    if(a.fullname < b.fullname) {
      return -1;
    }

    if(a.fullname > b.fullname) {
      return 1;
    }

    return 0;
  });

  console.log(peopleArray);
});
