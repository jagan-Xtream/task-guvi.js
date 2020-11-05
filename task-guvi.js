https://jaganm127.medium.com/difference-between-http1-1-vs-http2-f65b2c2b9dc9
https://jaganm127.medium.com/the-difference-between-a-primitive-datatype-and-a-non-primitive-datatype-817d91e4d991
https://jaganm127.medium.com/javascript-window-document-and-screen-a22e4172e8cb
https://jaganm127.medium.com/objects-and-its-internal-representation-in-javascript-276a73b56371
https://jaganm127.medium.com/copy-by-value-a-composite-data-type-7b37e31b7695
file:///C:/Users/COOL/Desktop/And/8th%20task.html

var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   

   //Adding height and weight to fluffy

   cat.height=24;
   cat.weight=4;

   //Updating fluffyy name
  cat.name="Fluffyy";

   //Listing all Fluffyy's friend
   let fluffyFriends;
          let catFriends
          if(fluffyFriends=cat.catFriends){
   console.log(fluffyFriends);}
   

   //Printing cat friend's name
   let catFriendsName="bar,foo";
   console.log(catFriendsName);
   //Printing the total weight of flufyy's friends
   let totalweight=0;
   for(let catFriend of fluffyFriends)
   {
    totalweight+= catFriend.weight; 
   }
   console.log(totalweight);    

   //Adding total activities of all cat
   let fluffysActivityCount;
   let totalActivityCount;
   if(fluffysActivityCount=cat.activities.length){
       if(totalActivityCount=fluffysActivityCount){
   for(let catFriend of fluffyFriends)
   {
    totalActivityCount+=catFriend.activities.length; 
   }
   }
   }
   console.log(totalActivityCount);

   //Adding two mor activities to Fluffy's friends
   let barActivities=["run","jump"];
   let fooActivities=[" " ,"run", "jump"];
 console.log(barActivities+fooActivities)
   //Updating fur color of bar
   cat.catFriends[0].furcolor="Ginger";


   console.log(cat);
