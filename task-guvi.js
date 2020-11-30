 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                   
                                                                 //Blog write up and API call
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION: //Difference between HTTP1.1 vs HTTP2 - - publish as a blog in medium ?
     
ANSWER:  https://jaganm127.medium.com/difference-between-http1-1-vs-http2-f65b2c2b9dc9
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION: //why there is a difference in behavior for copying contents in primitive and non primitive t//ype?

ANSWER:  https://jaganm127.medium.com/the-difference-between-a-primitive-datatype-and-a-non-primitive-datatype-817d91e4d991
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION:  //What is the difference between window, screen, and document in Javascript? - publish as a blog in medium.

ANSWER : https://jaganm127.medium.com/javascript-window-document-and-screen-a22e4172e8cb
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION: //Write a blog about objects and its internal representation in Javascript in medium. 

ANSWER: https://jaganm127.medium.com/objects-and-its-internal-representation-in-javascript-276a73b56371
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION: //How do you copy by value a composite data type?

ANSWER:  https://jaganm127.medium.com/copy-by-value-a-composite-data-type-7b37e31b7695
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUESTION://Try the rest countries api below. Extract and print the flag url of all the countries in console. Use the html template. https://restcountries.eu/rest/v2/all

ANSWER:file:///C:/Users/COOL/Desktop/And/8th%20task.html -------------> INSPECT
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 QUESTION : //JSON task (solve all the problems) - https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5 

 ANSWER :

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
   
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Adding height and weight to fluffy

ANSWER:
        cat.height=24;
        cat.weight=4;
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Updating fluffyy name
ANSWER:
         cat.name="Fluffyy";
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Listing all Fluffyy's friend

ANSWER:
          let fluffyFriends;
          let catFriends
          if(fluffyFriends=cat.catFriends){
          console.log(fluffyFriends);}
   
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  RELATED QUESTION:  //Printing cat friend's name

ANSWER:

           let catFriendsName="bar,foo";
           console.log(catFriendsName);
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Printing the total weight of flufyy's friends

ANSWER:
        let totalweight=0;
        for(let catFriend of fluffyFriends)
   {
         totalweight+= catFriend.weight; 
   }
         console.log(totalweight);    
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Adding total activities of all cat

ANSWER: 

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
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  RELATED QUESTION: //Adding two mor activities to Fluffy's friends
ANSWER:

      let barActivities=["run","jump"];
      let fooActivities=[" " ,"run", "jump"];
      console.log(barActivities+fooActivities)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   RELATED QUESTION: //Updating fur color of bar
   
   ANSWER:
         cat.catFriends[0].furcolor="Ginger";
         console.log(cat);
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
