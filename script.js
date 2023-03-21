/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

*/

s="aaaxbbbbyyhwawiwjjjwwm"


function printerError(a) {
	let array = [...a]

	let mistake = 0
	for(let i = 0; i< array.length; i++) {
		if (i === "n" || i === "o" || i === "p" || i === "q"|| i === "r" || i === "s" || i === "t" || i === "u"
		 || i === "w" || i === "x" || i === "y" || i === "z") {  
			//The mistake on the if statement is that it is checking if i === n, instead of array[i]. So only i indicates the index and not a letter
			mistake += i; //In this case it will be concatenating the indexes, instead of adding 1 every time there is a mistake. Solution mistake++
			console.log("mistake"/array.length)  //dividing strings by numbers = NaN
		} else {
			console.log("0"/array.length)
		}
	}
};

console.log(printerError(s))

// BETTER SOLUTION

let s = "aaaxbbbbyyhwawiwjjjwwm";


function printerError(a) {
  let array = [...a];
  let mistake = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > "m") {
      mistake++;
    }
  }
  console.log(mistake + "/" + array.length);
  return mistake + "/" + array.length;
}

console.log(printerError(s));



/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/


function isIsogram(str) {
	let array = [...str.toLowerCase()]
	for (let i =0; i<array.length; i++) {
		for (let j = i+1; j <array.length; j++) {
			if (array[i]===array[j] && i!=j) {
				return false;
			} 
		}
	}
	return true;
}


/*

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/


function sumBinary(a,b) {
	let sum = a+b;
	let binary = ""
	for (let i=0; i<sum; i++) {
		binary += (sum %2).toString()
		Math.floor(sum /=2)
	}
	console.log(binary)
}







function reverseString(str) {
	let splitStr = str.split("");
	let reverseArr = splitStr.reverse();
	let joinArr = reverseArr.join("");
	return joinArr;
}

function addBinary(a,b) {
	let sum = a + b;
	let binary = ""
	while (sum > 0) {
		binary += (sum%2).toString()
		sum = Math.floor(sum/2)
	}

	function reverseString(str) {
	let splitStr = str.split("");
	let reverseArr = splitStr.reverse();
	let joinArr = reverseArr.join("");
	return joinArr;
	}

	binaryRev = reverseString(binary)
	console.log("'"+binaryRev+"'")
	
}

addBinary(1,2)

/*

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
	let array = [...str]
	let letterX = 0
	let letterO = 0

	for (let i=0; i<array.length; i++) {
		if(array[i].toLowerCase() !== "x" || array[i].toLowerCase() !== "o") {
			continue;
		} else if (array[i].toLowerCase() === "o") {
			letterO++
		} else if (array[i].toLowerCase() === "x") {
			letterX++
		}
	}
	 if (letterX === letterO) {
		return true
	} else {
		return false
	}
}




function XO(str) {
	let array = [...str]
	let letterX = 0
	let letterO = 0

	for (let i=0; i<array.length; i++) {
		if (array[i].toLowerCase() === "o") {
			letterO++
		} else if (array[i].toLowerCase() === "x") {
			letterX++
		}
	}
	 return letterX === letterO
}


XO("ooxx") 
XO("xooxx") 
XO("ooxXm") 
XO("zpzpzpp") 
XO("zzoo") 


/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/


function getCount(str) {
	let str2 = str.toLowerCase();
	let arr = [...str2]
  	let vowels = 0;

	for(let i=0; i<arr.length; i++){
		if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" ||
		arr[i] === "o" || arr[i] === "u") {
		 vowels++
		}
	}

	return vowels

}
console.log(getCount("laura"))

	//SOLUTION USING ARRAY.FILTER
	function countVowels(str) {
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		const strArr = str.toLowerCase().split('');
		const vowelsArr = strArr.filter(char => vowels.includes(char));
		return vowelsArr.length;
	  }

	  // 1. Create an array of vowels
	  // 2. change the string to lower case and split it, to turn it into an array
	  // 3. It creates a new array (through the use of filter) that contains the vowels from the input 
	  	/*The test is fro every character of the array, it checks if it inclued elements from the 
		vowels. If ot does, adds it to the new array*/

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
 It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

let emptyArr = []

let arr= ["Max", "John", "Mark"]
arr.splice(-1,0,"and")

function likes(names) {
	if(names.length === 0) {
		return ('no one likes this')
	}else if (names.length === 1) {
		return(`${names[0]} likes this`)
	} else if (names.length === 2) {
		return(`${names[0]} and ${names[1]} like this`)
	}else if (names.length === 3) {
		return(`${names[0]}, ${names[1]} and ${names[2]} like this`)
	} else {
		return(`${names[0]}, ${names[1]}, and ${names.length-2} others like this`)
	}
	

}

likes(emptyArr)                               
likes(["Peter"])                      
likes(["Jacob", "Alex"])               
likes(["Max", "John", "Mark"])        
likes(["Alex", "Jacob", "Mark", "Max"] )


/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], 
and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, 
brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(s) {
  const stack = [];
  const braces = {  // properties are opening braces, and the values the closing ones
    '(': ')',
    '{': '}',
    '[': ']'
  };

  /*
  These lines create an empty array called stack and an object called braces
	that contains the corresponding closing braces for each opening brace.
  */

  for (let i = 0; i < s.length; i++) {
    if (s[i] in braces) { //If the element in the string belong in the braces variable
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (s[i] !== braces[last]) { //braces[last] gets the value
        return false;
      }
    }
/*
This code check if s[i] is an opening bracket, if it is, it is added to the new array. If it is not is assumed that it is a closing
We assign a new variable to the last opening bracket to the new stack and compare it to the closing bracket, to see if they match
*/
  }
  return stack.length === 0;
}
/*
This line checks whether the stack array is empty. If it is empty, it means that all opening braces
have been matched with their corresponding closing braces, so the function returns true. 
Otherwise, it means that there are opening braces that haven't been matched with their corresponding closing braces,
so the function returns false.
*/


/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/



function findOdd(A) {
	let counts = {};
	A.forEach((x) => {
		counts[x] = (counts[x] || 0) +1;
	});
	for(const item in counts) {
		if(counts[item]%2 !== 0){
			return parseInt(item)
		}
	}
}

