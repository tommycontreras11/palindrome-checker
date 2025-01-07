const buttonCheck = document.getElementById('check-btn');
const input = document.getElementById('text-input');
let result = document.getElementById('result');

const checkPalindrome = () => {
    const userInput = input.value.trim();
    if(userInput === '') {
        alert("Please input a value");
        return;
    }
    
    input.value = '';

    let cleanInput = removeNonAlphaNumericCharacters(userInput);
    let reverseInput = cleanInput.split('').reverse().join('');

    result.innerText =  `${userInput} is ${cleanInput !== reverseInput ? 'not' : ''} a palindrome`;

}

const removeNonAlphaNumericCharacters = (text) => { 
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

buttonCheck.addEventListener('click', checkPalindrome);