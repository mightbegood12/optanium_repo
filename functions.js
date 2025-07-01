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

const dict = {};
for (let size = 0; size < names.length; size++) {
  dict[names[size]] = salaries[size]
}

console.log(dict)