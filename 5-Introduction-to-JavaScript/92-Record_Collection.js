
// Completed Record Collection Challenge

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));




// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop == "tracks" && value != "") {
    // if tracks prop exists in collection...
    if (collection[id][prop]) {
      // push the value:
      collection[id][prop].push(value);
      // if tracks prop doesn't exist in collection...
    } else {
      // create tracks prop array and initialize with value:
      collection[id][prop] = [value];
    }
    // if prop isn't tracks and value is not empty...
  } else if (value != "") {
    // set the value for the prop:
    collection[id][prop] = value;
    // if prop isn't tracks and value is empty...
  } else if (value == "") {
    // delete the property:
    delete collection[id][prop];
  }
  // return collection to caller:
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
