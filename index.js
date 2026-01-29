

const output = document.getElementById("output");
const button = document.getElementById("btnMain");
const input = document.getElementById("input");

button.addEventListener("click", () => {

    output.textContent = convertToPairs(input.value);

});

console.log(checkPal("cap"));

function reverseString(str)
{
    return str.split("").reverse().join("");
};

function reverseArray(arr)
{
    return [...arr].reverse();
}
 
function checkPal(str)
{
    return (str.toLowerCase().split("").reverse().join("") === str.toLowerCase()); 
}

function countLetters(str){
    str = str ?? "";
    const freq = {};

    for (let char of str) {
        if (char === " ") continue; 
        freq[char] = (freq[char] ||  0) + 1; 
    }

    return Object.entries(freq).map(([char, count]) => `${char}:${count}`).join(" "); 
}

function countLettersRaw(str){
    str = str ?? "";
    const freq = {};

    for (let char of str) {
        if (char === " ") continue; 
        freq[char] = (freq[char] ||  0) + 1; 
    }

    return freq; 
}

function checkAnagram(str1, str2) {

     str1 = str1.toLowerCase(); 
     str2 = str2.toLowerCase(); 

    const str1FreqMap = countLettersRaw(str1);
    const str2FreqMap = countLettersRaw(str2);

    if (Object.entries(str1FreqMap).length !== Object.entries(str2FreqMap).length) return false;

    for (let char in str1FreqMap) {
        if (str1FreqMap[char] !== str2FreqMap[char]) return false; 
    }

    return true; 
}

function nonRepeatingCharacter(str){

    str = str.toLowerCase() ?? ""; 

    const freq = countLettersRaw(str);

    for (let char of str) 
    {
        console.log(freq[char]);
        if (freq[char] === 1) return `${char} is the first non-repeating character!`;
    }

    return "There are no unique values."

}

function convertToPairs(str) {

    const arr = str.split(";");
    let resultArr = []; 
    
    for (let element of arr)
    {
        let pair = element.split(",");
        resultArr.push(pair);
    }

    for (let element of resultArr)
    {
        console.log(element); 
    }
}

// a,1;c,2;d,3;b,4