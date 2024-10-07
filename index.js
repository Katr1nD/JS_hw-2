// Дано ціле число x. Поверніть true, якщо число є паліндромом, і false в іншому випадку.

function isPalindrome(num){
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(121) ? 'Palindrome' : 'It\'s not a palindrome');

// one more solution
function isPalindromeTwoPointers(num) {
    const str = num.toString();
    let i = 0,
        j = str.length - 1;
    while (i <= j){
        if(str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindromeTwoPointers(-151) ? 'Palindrome' : 'Not a palindrome');
