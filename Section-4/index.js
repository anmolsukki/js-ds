// Count number of occurrences for each char in a string
const string = 'hi hello'.replace(/ +/g, "");
const result = [...string].reduce((reducer, el) => {
    reducer[el] = reducer[el] ? reducer[el] + 1 : 1;
    return reducer
}, {});
console.log(result);

// Other Method
const string1 = 'hi hello'.replace(/ +/g, "");
const charCount = (str) => {
    const result1 = {}
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(result1[char]) {
            result1[char]++
        } else {
            result1[char] = 1
        }
    }
    return result1
}
console.log(charCount(string1))
