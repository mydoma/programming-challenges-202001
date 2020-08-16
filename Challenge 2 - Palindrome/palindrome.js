let nums1 = []
let nums2 = []
let largestPalindrome = 0
let largestPalindromeFactors

// create two arrays of all 3-digit numbers
for(let i = 999; i > 100; i--) {
    nums1.push(i)
    nums2.push(i)
}

// check if product is a palindrome
function isPalindrome(n) {
    let array = []
    let string1 = n.toString()
    let string2 = ""
    
    // convert product to a string and push each number to an array
    for(let i = 0; i < n.toString().length; i++) {
        array.push(n.toString().charAt(i))
    }

    // reverse the array
    array.reverse()

    // convert the array back to a string
    array.forEach(n => {
        string2 += n
    })

    // return true if the strings match
    if(string1 === string2) {
        return true
    }
}

// multiply each number in the first array by each number in the second array and store the largest palindrome and its factors
for(let i = 0; i < nums1.length; i++) {
    for(let c = 0; c < nums2.length; c++) {
        let product = nums1[i] * nums2[c]
        let factors = {n1: nums1[i], n2: nums2[c]}
        if(isPalindrome(product) && (product > largestPalindrome)) {
            largestPalindrome = product
            largestPalindromeFactors = factors
        }
    }
}

console.log(`The largest palindrome made from the product of two 3-digit numbers is ${largestPalindrome} = ${largestPalindromeFactors.n1} x ${largestPalindromeFactors.n2}.`)