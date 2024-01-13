// 1.Print odd numbers in an array:

// solution:

const oddnumber = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
oddnumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// IIFE Function

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// --------------------------------------------------------------------------------------------

//Question 2:Convert All Strings to Title Caps in a String Array:

const convertToTitleCaps = function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

const inputArray = ["hello", "world", "javascript"];
const titleCapsArray = convertToTitleCaps(inputArray);
console.log(titleCapsArray);

// output: [ 'Hello', 'World', 'Javascript' ]

//IIFE funtion:

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  console.log(arr);
})(["hello", "world", "javascript"]);

// output: [ 'Hello', 'World', 'Javascript' ]

// --------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
//Question 3:Sum of All Numbers in an Array:

const sumArray = function (arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
};

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log(totalSum);

// output: 15

//IIFE funtion:

(function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5]);

// output: 15

//-----------------------------------------------------------------------------

//Question 4: Return All Prime Numbers in an Array:
const isPrime = function (num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = function (arr) {
  return arr.filter(function (num) {
    return isPrime(num);
  });
};

const inputNumbers = [2, 3, 4, 5, 6, 7, 8, 9];
const primes = primeNumbers(inputNumbers);
console.log(primes);

// output: [ 2, 3, 5, 7 ]

//IIFE funtion:

(function (arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }
  console.log(primeNumbers);
})([2, 3, 4, 5, 6, 7, 8, 9]);

// output: [ 2, 3, 5, 7 ]

//------------------------------------------------------------------------------
//Question 5: Return All Palindromes in an Array:

const findPalindrome = function (arr) {
  return arr.filter(function (str) {
    return str === str.split("").reverse().join("");
  });
};

const arrayWithPalindromes = findPalindrome([
  "level",
  "hello",
  "world",
  "madam",
]);
console.log(arrayWithPalindromes);

// output: [ 'level', 'madam' ]

//IIFE funtion:

const isPalindrome = function (str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const findPalindromes = (function (arr) {
  return arr.filter(function (word) {
    return isPalindrome(word);
  });
})(["level", "hello", "world", "madam"]);

console.log(findPalindromes);

// output: [ 'level', 'madam' ]
//-------------------------------------------------------------------

//Question 6: Return Median of Two Sorted Arrays of the Same Size:

const findMedian = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const middle = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};

const median = findMedian([1, 3, 5], [2, 4, 6]);
console.log(median);

// output: 3.5

//IIFE funtion:

const findMedianSortedArrays = (function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = mergedArray.length;
  if (length % 2 === 0) {
    const mid1 = mergedArray[length / 2 - 1];
    const mid2 = mergedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
})([1, 3, 5], [2, 4, 6]);

console.log(findMedianSortedArrays);

// output: 3.5
//---------------------------------------------------------------------------

//Question 7: Remove Duplicates from an Array:

const removeDuplicate = function (arr) {
  return arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
};

const arrayWithDuplicatesRemoved = removeDuplicate([1, 2, 2, 3, 4, 4, 5]);
console.log(arrayWithDuplicatesRemoved);

// output: [ 1, 2, 3, 4, 5 ]

//IIFE funtion:

const removeDuplicates = (function (arr) {
  return arr.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
})([1, 2, 2, 3, 4, 4, 5, 5]);

console.log(removeDuplicates);

// output: [ 1, 2, 3, 4, 5 ]

//------------------------------------------------------------------

//Question 8:  Rotate an Array by k Times:

const rotateArr = function (arr, k) {
  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
};

const rotatedArr = rotateArr([1, 2, 3, 4, 5], 3);
console.log(rotatedArr);

// output: [ 4, 5, 1, 2, 3 ]

//IIFE funtion:
const rotateArray = (function (arr, k) {
  k %= arr.length;
  const rotated = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
  return rotated;
})([1, 2, 3, 4, 5], 3);

console.log(rotateArray);

// output: [ 4, 5, 1, 2, 3 ]
//----------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
