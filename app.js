//isPalindrome
// 121 => true
// 12 => false
// 5 => true
// -121 => false

// function isPalindrome(num) {
//   if (num < 0) return false;

//   let reverse = 0,
//     lastDigit,
//     original = num;

//   while (original > 0) {
//     lastDigit = original % 10; //1, 2, 1
//     reverse = reverse * 10 + lastDigit; // 1, 12, 121
//     original = Math.floor(original / 10); //12, 1, 0
//   }

//   return reverse === num;
// }

// console.log(isPalindrome(1001));
// console.log(isPalindrome(221));
// console.log(isPalindrome(12));
// console.log(isPalindrome(5));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(3212312423423423423));

// anagram
// function anagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("rat", "cat")); //

// // fizz buzz
// function fizzBuzz(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(`${i}`);
//     }
//   }

//   return result;
// }

// console.log(fizzBuzz(15));

// // two sum
// function twoSum(nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i, j);
//       }
//     }
//   }

//   return result;
// }

// console.log(twoSum([2, 11, 7, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// 2 - 11, 7, 15
// 11 - 7, 15
// 7 - 15

// singleNumber

function singleNumber(nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}

console.log(singleNumber([2, 2, 1])); // 1 2 2
console.log(singleNumber([4, 1, 2, 1, 2])); // 1 1 2 2 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([3, 1, 1, 2, 2, 3, 4])); // 1
