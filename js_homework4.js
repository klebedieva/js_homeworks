function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let countOdd = 0;
    let countEven = 0;
    for (let i=0; i < count; i++) {
        let randomNum = Math.round(min + Math.random() * (max - min));
        console.log(`Generated number ${i + 1}:`, randomNum);
        if (randomNum % 2 === 0) {countEven++}
        else {countOdd++} 
}
let percentEven = (countEven / count) * 100;
let percentOdd = (countOdd / count) * 100;
return {
    countGeneratedNum: count,
    countEven, 
    countOdd,
    percentEven: percentEven.toFixed(2) + '%',
    percentOdd: percentOdd.toFixed(2) + '%'
};
}
console.log(checkProbabilityTheory(5));