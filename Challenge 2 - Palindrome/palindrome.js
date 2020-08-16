
//Function to find the largest palindrome made from product of two 3 digit numbers.
//The palindrome can be found by using two for loops but the time complexity will be very high due to increased number of iterations.

//A 4 digit number is palindrome when it is in the form of "abba" or 1000a+100b+10b+a or 11(91a+10b).
//Similarly incase of product of two three digit numbers the resultant value will have 6 digits and it will be in the form of abccba
//or it can be simplified further as 11(9091a+910b+100c)
//Hence instead of finding product of all combinatons we can find product of two numbers x and y in which either x or y will have a factor of 11.

function largest_palindrome(no_of_digits) {
  //Calculating upper and lower bound of 3 digit numbers. In this case it is 999 and 100
  var min = Math.pow(10,(no_of_digits-1)) - 1
  var max = Math.pow(10,no_of_digits) - 1

  var max_value = 0
  var num_1, num_2 = 0

  for (var i=max; i>min; i-=11){
    while(i%11!=0){
      i--
    }
    for (var j = max; j>min; j--){
      product = i*j
      if (is_palindrome(product) && product > max_value){
        max_value = product
        num_1 = i
        num_2 = j
      }
    }
  }
  console.log("The largest palindrome made from the product of two " + no_of_digits +"-digit numbers is " + num_1 + " x " + num_2 + " = " + max_value);
}

//Function to check if the product passed is Palindrome
function is_palindrome(value) {
  var result = 0
  var actual_value  = value
  while(value>0){
    result = (result*10) + value%10
    value = Math.floor(value/10)
  }
  if (result == actual_value){
    return true
  }
  return false
}


const no_of_digits = 3
largest_palindrome(no_of_digits)
