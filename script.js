const buttonCheck = document.getElementById('check-btn');
const input = document.getElementById('text-input');
let result = document.getElementById('result');

const checkPalindrome = () => {
    if(input.value === '') {
        alert("Please input a value");
        return;
    }

    let cleanInput = removeNonAlphaNumericCharacters(input.value);
    let reverseInput = cleanInput.split('').reverse().join('');

    input.innerText = '';

    result.innerText =  `${input.value} is ${cleanInput !== reverseInput ? 'not' : ''} a palindrome`;
}

const removeNonAlphaNumericCharacters = (text) => { 
    return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

buttonCheck.addEventListener('click', checkPalindrome);