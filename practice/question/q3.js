// Given a number, you have to use if, else if, else conditional statements according to the following:
// if number is greater than 100: Print "Big" (without quotes)
// else if number is smaller than 10: Print "Small" (without quotes)
// else: Print "Number" (without quotes) 

// Note: Ensure that the output includes a newline after every print statement.

class Solution {
    utility(number) {
        // write your if - else if - else statements here
        if(number>100){
            console.log("Big");
        }
        else if(number<10){
            console.log("Small");
        }else{
            console.log("Number");
        }
    }
}