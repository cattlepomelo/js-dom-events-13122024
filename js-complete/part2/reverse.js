let inputString = "sveiki";

function reverseString(str) {
    // izmantot reverse metodi
    let reverseStr = inputString.split("").reverse().join("")
    return reverseStr;
}


console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));