/*

Ques: Write a function to render the following pattern in the console:
* * * * *
* * * *
* * *
* * 
*

The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

*/

var q2 = document.getElementById('q2');


q2.onclick = function(){
    function getNumberInput(){
        input = prompt("Enter the number of Asterik in first row: ")
        return parseInt(input)
    }
    
    function displayAsterik(numberOfAsterik){
        for (var i=numberOfAsterik ; i>=1 ; i--){
            console.log(Array(i+1).join("*"));
        }
    }
    
    displayAsterik(getNumberInput());
    
}
