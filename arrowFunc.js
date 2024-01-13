//"Using arrow functions in JavaScript:"

//Question 1:   Print Odd Numbers in an Array:

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6]);

//Output:
//1
//3
//5
//7
//9

//------------------------------------------------------------------------

//Question 2:Convert All Strings to Title Caps in a String Array:

const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

console.log(convertToTitleCaps(["hello", "world", "javascript"]));

//Output: [ 'Hello', 'World', 'Javascript' ]

//------------------------------------------------------------------------

//Question 3: Sum of All Numbers in an Array:

const sumArray = (arr) => {
  return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//Output: 15

//------------------------------------------------------------------------

//Question 4: Return All Prime Numbers in an Array:

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = (arr) => {
  return arr.filter((num) => {
    return isPrime(num);
  });
};

console.log(primeNumbers([2, 3, 4, 5, 6, 7, 8, 9]));

//Output: [ 2, 3, 5, 7 ]

//------------------------------------------------------------------------

//Question 5: Return All Palindromes in an Array:

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
};

const palindromes = (arr) => {
  return arr.filter((str) => {
    return isPalindrome(str);
  });
};

console.log(palindromes(["racecar", "hello", "level", "world", "deified"]));

//Output: [ 'racecar', 'level', 'deified' ]

//------------------------------------------------------------------------
