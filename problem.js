// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Bob Ross can see the 4th dimension"; // -> 10
function vowelCounter(str) {
  let total = 0;
  str = str.toLowerCase().split('');
  //// sets characters of string to lowercase to count all vowels
  str.forEach((item) => {
    switch (item) {
      case 'a':
        total++;
        break;
      case 'e':
        total++;
        break;
      case 'i':
        total++;
        break;
      case 'o':
        total++;
        break;
      case 'u':
        total++;
        break;
        //// break goes through the next iteration of the loop
    }
  });
return total;
};

console.log(vowelCounter(vowelString));