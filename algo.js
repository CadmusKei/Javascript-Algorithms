

const output = document.getElementById("output");
const button = document.getElementById("btnMain");
const input = document.getElementById("input");

button.addEventListener("click", () => {
    output.textContent = countLetters(input.value);
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



