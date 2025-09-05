// Given an integer s,  write a program to print a square wall of size s without using string multiplication. Use nested loops instead. The * character will make up the wall.

// User function Template for javascript

class Solution {
    squareWall(num) {
        // code here
        for(let i=0;i<num;i++){
            let row= "";
        for(let j=0;j<num;j++){
            row+= "* ";
            
        }
        console.log(row);
    }
    }
}