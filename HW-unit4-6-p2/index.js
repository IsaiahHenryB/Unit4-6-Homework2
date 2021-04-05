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

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array




