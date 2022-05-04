// ******************** Anagrams Start ********************
// anagrams (Check String all character Anagram)
const checkStringsAnagram = (a, b) => {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
        console.log("false");
       return false
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }

checkStringsAnagram("indian", "ndiani") // true
// ******************** Anagrams End ********************







// ******************** Set Start ********************
// countUniqueValues

// Set:- Set object lets you store unique values of any type
const countUnique = (iterable) => {
   return new Set(iterable).size;
}
console.log(countUnique([5,6,5,6])); //=> 2

// Arr Object Unique
const arrObj = [{name: "abc", slug: "abc"}, {name: "xyz", slug: "xyz"}, {name: "abc", slug: "abc"}]
const outputArray = [...new Set(arrObj.map((brand) => JSON.stringify(brand)))].map((brandString) => JSON.parse(brandString))
console.log(outputArray)
// ******************** Set End ********************
