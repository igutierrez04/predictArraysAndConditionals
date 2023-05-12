//Predict what the output on each code snippets will be

// Code Snippet 1
function displayContactInfo(){
    var auntContactInfo = ["Paula", "Smith", "123 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
} // it will output all the data in var auntContactInfo

displayContactInfo()

//code snippet 2
function displayGrocerylist(){
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
} // it will only output frozen plus the last item that was pushed to the array. ["borccoli", "ice cream", "hashbrowns"]

displayGrocerylist()

// code snippet 3
var movieLibrary = ["Bambi", "E.T", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary)
// it will output ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
// we addded Zoro to the end of the array, and modified index 1 to be Betteljuice