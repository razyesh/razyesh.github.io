/*

Ques: Write a function that searches for an object by a specific key value in an array of objects:


*/


var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'},
    {id: 3, name:'Orange', color: 'Organge'},
    {id: 4, name:'Grapes', color: ['Green','Black']}
]


document.getElementById('searchByName').onclick = function(){

    input = prompt("Enter the name of Fruit: ")
    function searchByName(fruits, input){
        
        for (var i =0; i<fruits.length; i++){
            if (fruits[i]['name'].toUpperCase() == input.toUpperCase()) {
                
                return fruits[i]
                
            }
        }
        
    }
    
    result = searchByName(fruits, input)
    if (result){
        console.log(result);
    }
    else {
        alert("Not Found")
    }
}

document.getElementById('searchByKey').onclick = function(){
    function searchByKey(fruits, input1, input2){
        for (var i =0; i<fruits.length; i++){
            if (fruits[i][input1] == input2) {
                return fruits[i]
            }
        }
    }

    input1 = prompt("Enter key: ");
    input2 = prompt("Enter value: ");



    result = searchByKey(fruits, input1, input2)
    if (result){
        console.log(result);
    }
    else {
        alert("Not Found")
    }

}
