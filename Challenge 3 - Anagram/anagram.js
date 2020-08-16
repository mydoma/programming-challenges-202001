let submitBtn = document.getElementById("submitBtn")
let result = document.getElementById("result")
let input = document.getElementsByTagName("input")

// add event listeners for ui
submitBtn.addEventListener("click", updateDom)
for (let i = 0 ; i < input.length; i++) {
    input[i].addEventListener('keyup' , () => {
        if((document.getElementById("word1").value !== "") && (document.getElementById("word2").value !== "")) {
            submitBtn.disabled = false
        } else {
            submitBtn.disabled = true
        }
    })
}

// update the DOM with the results
function updateDom(e) {
    e.preventDefault()

    let word1 = document.getElementById("word1").value
    let word2 = document.getElementById("word2").value

    if(isAnagram(word1, word2)) {
        result.innerHTML = `"${word1}" and "${word2}" are anagrams!`
    } else {
        result.innerText = `"${word1}" and "${word2}" are not anagrams.`
    }
}

function isAnagram(w1, w2) {

    // take both words, convert to lowercase, remove spaces, put each letter into an array, and sort the array alphabetically
    let w1Letters = w1.toLowerCase().replace(/\s/g,"").split("").sort()
    let w2Letters = w2.toLowerCase().replace(/\s/g,"").split("").sort()

    // check if the arrays are the same length
    if(w1Letters.length !== w2Letters.length) {
        return false
    }

    // check each letter in one array to each corresponding letter in the other array to see if they match
    for(let i = 0; i < w1Letters.length; i++) {
        if(w1Letters[i] !== w2Letters[i]) {
            return false
        }
    }

    return true
}
