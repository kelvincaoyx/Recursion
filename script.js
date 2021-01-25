function iterativeSumOfDigits(digits){
  let sum = 0;
  for (var i = 0; i < digits.toString().length; i++){
    sum += Number(digits.toString()[i]);
  }
  return sum;
}

function recursiveSumOfDigits(digits, index=0){
  if(index == digits.toString().length - 1){
    return Number(digits.toString()[index]);
  }
  return Number(digits.toString()[index]) + recursiveSumOfDigits(digits, index+1);
}

function interativePalinedromeCalculator(word){
  let numberOfPalinedromes = 0;
  for (var i = 0; i < word.toLowerCase().length; i++){
    for (var j = i + 1; j < word.toLowerCase().length; j++){
      var testWord = word.slice(i,j+1);
      var reversedTestWord = testWord.split("").reverse().join("");
      if (testWord == reversedTestWord){
        numberOfPalinedromes+=1;
      }  
    }
  }
  return numberOfPalinedromes;
}

function recursivePalinedromeCalculator(word, firstIndex=0){
  let numberOfPalinedromes = 0;
  if (firstIndex >= word.length){
    return 0;
  }
  numberOfPalinedromes = recursivePalinedromeCalculatorHelper(word, firstIndex, firstIndex+1)
  return numberOfPalinedromes + recursivePalinedromeCalculator(word, firstIndex+1)
}

function recursivePalinedromeCalculatorHelper(word, firstIndex, secondIndex){
  if (secondIndex >= word.length){
    return 0
  }
  var testWord = word.slice(firstIndex, secondIndex+1);
  var reversedTestWord = testWord.split("").reverse().join("");
  if (testWord == reversedTestWord){
      return 1 + recursivePalinedromeCalculatorHelper(word, firstIndex, secondIndex+1)
    }
  return 0 + recursivePalinedromeCalculatorHelper(word, firstIndex, secondIndex+1)
}

console.log(iterativeSumOfDigits(314159265359))
console.log(recursiveSumOfDigits(314159265359))
console.log(interativePalinedromeCalculator("AMANAPLANACANALPANAMA"))
console.log(recursivePalinedromeCalculator("AMANAPLANACANALPANAMA"))