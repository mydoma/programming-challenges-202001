
//Function to sort the random list using hash table.
// Quick and merge sort algorithms are best when it comes to sorting but they are not very efficient when the array has duplicates.
// Hash table is efficient mean of sorting when the list has duplicates.
function sorting(random_list){

  //Creating a hash table of size 100 and initializing to zero
  var hash_table = new Array(100).fill(0)
  //Counting the number of occurences of each integer in the random list and storing it in the hash table
  random_list.forEach((item) => {
    hash_table[item] = hash_table[item]+1
  });

  //Sorting the random_list by replacing its value with corresponding hash table index
  //Each index of hash table denotes the number of occurence of the index in the random_list
  var index = 0
  for (var i =0; i<100; i++){
    while(hash_table[i]>0){
      random_list[index] = i
      hash_table[i] = hash_table[i]-1
      index += 1
    }
  }
  return(random_list)
}

// Function to generate array of size 100 containing random numbers between 1 and 99.
function randomGenerator(min, max) {
  list = []
  i= 0
  while (i < 100) {
    list.push(Math.floor(Math.random()*(max)+min));
    i ++;
  }
  return list;
 }


const min = 1;
const max = 99;
let random_list = randomGenerator(min, max)
console.log("Random integers between 1 and 99: ", random_list);
let sorted_array = sorting(random_list)
console.log("Sorted list : ", sorted_array);
