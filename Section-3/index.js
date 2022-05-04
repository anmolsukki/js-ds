// ******************** Object Start ********************
// hasOwnProperty
const obj = {firstName: "Anmol", lastName: "Singh"}

console.log("===1===>>", obj.hasOwnProperty("firstName")) // true
console.log("===2===>>", obj.hasOwnProperty("middleName")) // false
// ******************** Object End ********************






// ******************** Array Start ********************
// Note:- (push and pop is always faster than shift and unshift because re-arrange the index)

// 1. pop (Remove an item from the end of an array)
const arr1 = ["abc", "def", "ghi"]
arr1.pop()
console.log("===3===>>", arr1) // ["abc", "def"]

// 2. push (Add items to the end of an array)
const arr2 = ["abc", "def", "ghi"]
arr2.push("jkl")
console.log("===4===>>", arr2) // ["abc", "def", "ghi", "jkl"]

// 3. shift (Remove an item from the beginning of an array)
const arr3 = ["abc", "def", "ghi"]
arr3.shift()
console.log("===5===>>", arr3) // ["def", "ghi"]

// 4. unshift (Add items to the beginning of an array)
const arr4 = ["abc", "def", "ghi"]
arr4.unshift("jkl")
console.log("===6===>>", arr4) // ["jkl", "abc", "def", "ghi"]

// 5. concat (concat method is used to merge two or more arrays. and return new array)
const arr51 = ["abc", "def"]
const arr52 = ["ghi", "jkl"]
const arr53 = ["mno", "pqr"]
const arr5 = arr51.concat(arr52, arr53)
console.log("===7===>>", arr5) // ["abc", "def", "ghi", "jkl", "mno", "pqr"]

// 6. slice (slice method returns a shallow copy of a portion of an array into a new array object selected from start to end)
const arr6 = ["abc", "def", "ghi", "jkl", "mno", "pqr"]
console.log("===8===>", arr6.slice(2)) // ["ghi", "jkl", "mno", "pqr"]
console.log("===9===>", arr6.slice(2, 4)) // ["ghi", "jkl", "mno"] (Print last -1 payload element)
console.log("===10===>", arr6.slice(-1)) // ["pqr"]
console.log("===11===>", arr6.slice(-2)) // ["mno", "pqr"]

// 7. splice (splice change the content of your array by removing or replacing existing elements with new ones)
const arr71 = ["abc", "def", "ghi", "jkl"]
const arr71Removed = arr71.splice(2) // (remove array elements with splice)
console.log("===12===>>", arr71Removed) // [ 'ghi', 'jkl' ] // Removed arr element
console.log("===13===>>", arr71) // [ 'abc', 'def' ] // // Original arr element

const arr72 = ["abc", "def", "ghi", "jkl"] // syntax:-  arr.splice(start, removeCount, newItem, newItem, newItem, ...)
const removed72Array = arr72.splice(1, 2, "pqr", "stu") // (remove and add array elements with splice)
console.log("===14===>>",removed72Array) // [ 'def', 'ghi' ] (remove element)
console.log("===15===>>", arr72) // [ 'abc', 'pqr', 'stu', 'jkl' ] New original array with added element

const arr73 = ["abc", "def", "jkl"]
arr73.splice(2, 0, "ghi") // add new array elements without removing any elements
console.log("===16===>>", arr73) // [ 'abc', 'def', 'ghi', 'jkl' ] (add element before strat element)

/*
Note:-
push - O(1)
pop - O(1)

shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
forEach / map / filter / reduce - O(N)

sort - O(N * log N)
*/
// ******************** Array End ********************
