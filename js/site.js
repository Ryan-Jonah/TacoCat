/**
 * Get input from the user
 * Controller Function
 */ 
function getValue(){
    let userInput = (document.getElementById('userString').value).toString();

    userInput = stripString(userInput);
    let reversedInput = reverseString(userInput);

    displayResults(userInput, reversedInput);
}

/**
 * Remove spaces and other special characters
 * Check to see if string is palindrome
 * Logic Function
 */
function stripString(string){
    //return string
    let newString = '';

    //list of characters to include in split string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //Setting string to lowercase and removing training whitespace
    string = string.toLowerCase().trim();

    //Checks against alphabet to remove any special characters and 
    //assign them to the new string 
    for (let index = 0; index < string.length; index++) {
        if (alphabet.includes(string[index])){
            newString += string[index];
        }
    }

    return newString;
}

/**
 * Loops through original string in decremental order 
 * adding characters in reverse order
 */
function reverseString(string){
    let reversedString = "";

    for (let index = string.length-1; index >= 0; index--) {
        reversedString += string[index];        
    }

    return reversedString;
}

/**
 * Display result to the user
 * View Function
 */
function displayResults(userInput, reversedInput){
    if (userInput == reversedInput){
        document.getElementById('results').innerHTML = `<p class="mt-5 text-green-strong"> PALINDROME! ${userInput} == ${reversedInput}</p>`;
    } else {
        document.getElementById('results').innerHTML = `<p class="mt-5 text-danger"> Try Again! </p>`;
    }
}