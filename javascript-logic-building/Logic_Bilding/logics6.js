// Write a function that checks if a string is palindrome or not palindrome

function isPalindrome(inputString) {
  for (let i = 0; i <= inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log("isPalindrome");

console.log("madam", isPalindrome("madam"));
console.log("keshav", isPalindrome("keshav"));
console.log("abba", isPalindrome("abba"));
console.log("level", isPalindrome("level"));
console.log("kittu", isPalindrome("kittu"));
console.log("hahahah", isPalindrome("hahahah"));
console.log("bittub", isPalindrome("bittub"));
console.log("keshav", isPalindrome("rarar"));


function isPalindrome2(inputString){
  inputString = inputString.toLowerCase();
  const splittedInput = inputString.split("");
  console.log(splittedInput);
  const reversedInput = splittedInput.reverse();
  const reversedString = reversedInput.join();
  console.log(inputString,reversedInput,reversedString);
  if(reversedString === reversedInput){
    return true;
  }else{
    return false;
  }
}
console.log("isPalindrome2");


console.log("madam", isPalindrome2("madam"));
console.log("keshav", isPalindrome2("keshav"));
console.log("abba", isPalindrome2("abba"));
console.log("level", isPalindrome2("level"));
console.log("kittu", isPalindrome2("kittu"));
console.log("hahahah", isPalindrome2("hahahah"));
console.log("Bittub", isPalindrome2("Bittub"));
console.log("keshav", isPalindrome2("Rarar"));