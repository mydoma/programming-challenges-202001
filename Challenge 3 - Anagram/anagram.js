const prompt = require('prompt-sync')();

//Fetching input strings from the user
const string_1 = prompt('Please enter string 1 : ');
const string_2 = prompt('Please enter string 2 : ');

let anagram_check = is_anagram(string_1, string_2);
console.log("Is the given two strings anagram? ", anagram_check);

//Function to wheck whether the given two strings are anagram
function is_anagram(string_1, string_2) {

  //Storing the characters in the string in an array after removing spaces, converting all the characters to lower case and sorting them
  var string_1_arr = string_1.replace(/\s/g,'').toLowerCase().split("").sort()
  var string_2_arr = string_2.replace(/\s/g,'').toLowerCase().split("").sort()

  //If the string lengths are equal and each posses same character at corresponding index of the strings_array then they form anagram else return false.
  if (string_1_arr.length == string_2_arr.length){
    for (var i = 0; i < string_1_arr.length; i++ ){
      if (string_1_arr[i]!=string_2_arr[i]){
        return false
      }
    }
    return true
  }
  return false
  }
