
// Completed Profile Lookup Challenge
<<<<<<< HEAD
=======

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Loop through the contacts:
for (var i = 0; i < contacts.length; i++) {
    // If the contact exists:
    if (contacts[i].firstName && contacts[i].firstName == name) {
        // If the property exists:
        if (contacts[i].hasOwnProperty[prop]) {
            // Return the property's value:
            return(contacts[i][prop]);
        } else {
            return "No such property";
        }
    } else {
        return "No such contact";
    }
}

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
>>>>>>> 76ace5a33b3216d8334091712688a24b0866608a
