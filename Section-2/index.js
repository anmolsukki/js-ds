// ******************** AddUpto Function Start ********************
// Normal AddUpto Function
console.time();
const addUpto = (n) => {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total
}
console.log("===normal===>>>", addUpto(5))
console.timeEnd();

// Advance AddUpto Function
console.time();
const addUptoAdv = (n) => {
    return n * (n + 1) /2
}
console.log("===advance===>>>", addUptoAdv(5))
console.timeEnd();
// ******************** AddUpTo Function End ********************
