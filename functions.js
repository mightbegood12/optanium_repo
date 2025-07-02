//Array Manipulation
names = ["Raja", "Damo", "Ibrahim", "Selva", "Ashwin"]
salaries = [20000, 40000, 50000, 20000, 44000, 20000]


// adding elements
names.push("Joseph");
// console.log(names);

// sorting elements
names.sort();
// console.log(names);

// looping throught the names list
names.forEach(name => {
    // console.log("Hi, " + name)
});

//adding all salaries

total_salary = salaries.reduce((acc, salary)=>
  acc + salary
, 0);

//filtering salaries
new_salaries = salaries.filter((salary)=> {
  return salary >= 40000;
})

//reversing array elements
salaries = salaries.reverse();
names = names.reverse();

// console.log("Salaries: " + salaries + "\n" + "Salaries after filtering: "+ new_salaries)

// console.log("Total Salary is: " + total_salary)


//String Manipulation

let greeting_msg = '    Hello, How are you? Hope YOU do well.    ';
let name1 = names[0];

//remove white spaces only start and ending
new_msg = greeting_msg.trim();
// console.log(new_msg.length);
// console.log(greeting_msg.length);

//lowercase and uppercase
// console.log(greeting_msg.toLowerCase())
let upperCasedNames = names.map(name => name.toUpperCase())
// console.log(upperCasedNames);

//padding - specify total padded string length and string to be padded
padded_msg = new_msg.padStart(new_msg.length + 4, "#")
// console.log(padded_msg);

//concatenating strings
concatenated_str = new_msg.concat(name1)
// console.log(concatenated_str);

//checking if a substring is present returns boolean value
if (concatenated_str.includes("Hope you")){
  console.log("It is present!")
}
//checking if a substring is present but returns the index of the substring
console.log(concatenated_str.search("you"))

//checking if a string starts with particular string - similar to how regex works
console.log("Does it follow the Hello pattern: " + concatenated_str.startsWith("Hello,"))
console.log("Does it follow the Hello pattern: " + greeting_msg.startsWith("Hello,"))

// matches a string with an regular expression and returns the matched strings
console.log(concatenated_str.match(/you/gi)) //global flag with case insensitive
console.log(concatenated_str.match(/you/g))  //only global flag - all occurences are returned

//slicing - spliting a string using their index values
console.log(concatenated_str.slice(12, 28));

//character code for a particular letter
console.log(concatenated_str.at(26) + " " + concatenated_str.charCodeAt(26));

//Object manipulation

//definition
const car = {
  isFourDoor : false,
  printCarDetails(){
    console.log(`${this.carName} is launched brand new!. It comes with ${this.isFourDoor ? "four door" : "two door"} option.`);
  },
}


//object creation - instance
const honda = new Object(car);

honda.carName = "Honda SUV";
honda.isFourDoor = true;

honda.printCarDetails();

const lambo = new Object(car);

lambo.carName = "Lamborghini Hurricane";
lambo.isFourDoor = false;
lambo.printCarDetails();


//only returns the keys in the object as an Array
console.log(Object.keys(lambo));
//only return the values in the object as an array
console.log(Object.values(lambo));

//returns both key and value of an object
for (const [key, value] of Object.entries(honda)){
  console.log(`${key}: ${value}`);
}

