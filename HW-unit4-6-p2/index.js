//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Profile(name,age,career,user){
    this.name = name;
    this.age = age;
    this.career = career;
    this.user = user;
}



//Step 2

let profile1 = new Profile('Isaiah',"21","Producer");


//Step 3
let profile2 = new Profile('Debra',"57","Lunch Lady");
let profile3 = new Profile('Jake',"38","State Farm");
console.log(profile1,profile2,profile3)


//Step 4
function Admin(yearsActive,isAdmin){
    this.yearsActive = yearsActive;
    this.isAdmin = isAdmin;
}

//Step 5
let user1 = new Admin(5,true)
let user2 = new Admin(3,false)
let user3 = new Admin(1,false)

//Step 6
profile1 = new Profile('Isaiah',"21","Producer",user1);
profile2 = new Profile('Debra',"57","Lunch Lady",user2);
profile3 = new Profile('Jake',"38","State Farm",user3);
console.log(profile1,profile2,profile3)

// Step 7
user1.seniorMember = true
console.log(profile1)
// Step 8


//.Create

//Step 1
let User = {
    type: "Admin",
    displayType:function(){
        console.log(this.type)
    }
}

//Step 2
let newUser = Object.create(User);
newUser.displayType();

//Step 3
let oldUser = Object.create(User);
oldUser.type = "User";
oldUser.displayType()


//Array vs Objects

//Objects: Create a person object with properties with name, favorite number and boolean.
let person = {
    name: "Forte",
    favNum: 76,
    likesCoding: true,

}

//Use dot notation to return favorite number
console.log(person.name)
//Use bracket notation to return name
console.log(person["name"])

//Arrays: Create an array with 4 different flavors
const snappleFlavors = ['strawberry','kiwi','apple', 'fruit punch']
console.log(person)
//access third item in the array
console.log(snappleFlavors[2])
//Objects
//Change the value of the boolean of the object we created.
person.likesCoding = false;
console.log(person.likesCoding)
//Add a new property to our person object such as hobbies with multiple values in the property.
person.hobbies = ["biking","eating"];
console.log(person.hobbies);
//remove the favorite number property from the person object
delete person.favNum;
console.log(person);

//Arrays
//Use push to add another flavor to your array of flavors
snappleFlavors.push("citrus blend");
console.log(snappleFlavors);
//use pop to remove the last item from an flavor array
snappleFlavors.pop();
console.log(snappleFlavors);


//use unshift to add more values to the beginning of the flavor array.
snappleFlavors.unshift('Sweet Tea','Lemon');
console.log(snappleFlavors);

// us shift to remove the item from the flavor of the array
snappleFlavors.shift();
console.log(snappleFlavors);

//Object
//Write a for in loop for the person object you created
for (let name in person){
    console.log(person.name)
}
//Write a for each loop for your person Object
Object.keys(person).forEach(function(key) {
    console.log(key); // logs keys in person
   console.log(person[key]); // logs values in person
   });
   
//Arrays
//Write a for loop for your flavors array

//Write a for of loop for your flavors array
for(char of snappleFlavors){
    console.log(char)
}
//write a for each loop for your flavors array
snappleFlavors.forEach(item => {
    console.log(item);
    console.log(item.length)
}
)

