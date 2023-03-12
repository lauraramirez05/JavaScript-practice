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
		if(array[i].toLowerCase() === "x") {
			letterX++
		} else if (array[i].toLowerCase() === "o") {
			letterO++
		} else {
			return true
		}
	}
	
	if (letterX === letterO) {
		return true
	} else {
		return false
	}
}


XO("ooxx") 
XO("xooxx") 
XO("ooxXm") 
XO("zpzpzpp") 
XO("zzoo") 
