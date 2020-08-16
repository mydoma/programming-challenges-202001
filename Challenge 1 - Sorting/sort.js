let numberList = []
let sortedList = []

// generate a list of 100 random integers between 1 and 99
for(let i = 0; i < 100; i++) {
    numberList.push(Math.floor(Math.random() * (100 - 1) + 1))
}

// sort the list from lowest to highest
numberList.forEach(Ln => {

    // if sortedList is empty, insert the first number
    if(!sortedList.length) {
        sortedList.push(Ln)
        return
    }

    // loop through sortedList, comparing Ln to sortedList[i]
    for(let i = 0; i < sortedList.length; i++) {

        // if Ln is <, insert into sortedList
        if(Ln < sortedList[i]) {
            sortedList.splice(i, 0, Ln)
            break

        // if Ln is ==, insert into sortedList
        } else if(Ln == sortedList[i]) {
            sortedList.splice(i, 0, Ln)
            break

        // if Ln is > and on the *last* index of sortedList, insert Ln. otherwise run the loop again.
        } else if(Ln > sortedList[i]) {

            if(i == (sortedList.length - 1)) {
                sortedList.push(Ln)
                break
            }

        } else {
            console.log("Something went wrong!")
            break
        }
    }
})

console.log("Generated list of 100 random numbers between 1-99: ", numberList)
console.log("Sorted lowest to highest: ", sortedList)