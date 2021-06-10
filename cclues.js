$(document).ready(function () {
  var friends = ["Jim", "James", "Paul", "Tyrone", "Eryca"];
  var locations = [
    "Bathroom",
    "Elevator",
    "Dumbwaiter",
    "Roof",
    "Dog House",
    "Crawl Space",
    "Reflection Room",
    "Room That shant Be Spoken Of",
    "New York",
    "Wardrobe",
  ];
  var weapons = [
    "knife",
    "spoon",
    "combo move up,up,down,left,x",
    "zylophone",
    "power of love",
    "wheelbarrel",
    "#2 standerdized test pencil",
    "4th grade spelling trophy",
    "gun",
    "bbq sauce",
    "chair",
    "shovel",
    "towel",
    "deodorant",
    "belt",
    "wine bottle",
    "loaf of bread",
    "shoe",
    "bat",
    "computer",
  ];

  function createSentence(i){
      function alertAccusation() {
      
      alert(
        "Accusation " +
          (i+1) +
          ": I accuse " +
           (friends[i % friends.length])+
          ", with the " +
          (weapons[i % weapons.length]) +
          " in the " +
          (locations[i % locations.length])
      );
    }
    return alertAccusation;
  }
//   var randoFriends = friends[Math.floor(Math.random() * friends.length)];
//   var randoLocals = locations[Math.floor(Math.random() * locations.length)];
//   var randoWeapons = weapons[Math.floor(Math.random() * weapons.length)];
//   var value = $(this).val();

  for (var i = 0; i < 100; i++) {
   var h3 = $("<h3 class='accusations'>Accusation " + (i+1) + "</h3>")
      .attr("id", i)
      .appendTo("#bg")
    //   .appendTo("body");
      h3.click(createSentence(i));
        }
   //var iVal = $(this).attr("id"); 
   // $(this).css("color", "green");
  ;
 // if (friends[i] === 10-19 || weapons[i] === 10-19 || weapons[i] === 10-19) {
 //     console.log(hey)
  
});
