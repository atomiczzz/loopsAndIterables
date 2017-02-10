/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */
 var arraySum = function(input){
    var sum = 0
 	for(var i = 0; i < input.length; i ++){
    sum += input[i];
    }
     return sum
 }
 log(arraySum([1,2,3,4,5]))

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.
 var maxOfArray = function(input){
    return Math.max.apply(null,input)
 }
 log(maxOfArray([1,2,353,4,5,5,6,7]))
reset()

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */
var isVowel = function(letter){
    var isIt =['a','e','i','o','u']
	for(var i =0 ;i < isIt.length; i++){
        if(isIt[i] === letter){
            return true
        }
        return false
    }
}
log(isVowel('a'))

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}
log(reverseString("skoob"));


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */
var fizzString = function(input){
    var fizzbuzz = ''
	for(var i=1;i<input;i++){
    	if(i%3===0 && i%5 !==0){
            fizzbuzz += 'fizz'
        }
        else if(i%5===0 && i%3 !==0){
        	fizzbuzz +='buzz'
        }
        else if(i%3===0 && i%5===0){
        	fizzbuzz +='fizzbuzz'
        }
        else if(i%3 !==0 && i%5 !==0){
        	fizzbuzz+='.'
        }
    }
    return fizzbuzz
}
log(fizzString(20))


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
log(longestWord('pride and prejudice'))

/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
 var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
log(gcd(6,3))


