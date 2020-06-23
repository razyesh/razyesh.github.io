/*

Ques: Write a function that transforms an array of inputs into a new array based on a provided transformation function.


*/

var numbers = [1, 2, 3, 4];

document.getElementById('transform').onclick = function(){

    function tranFunc(num){
        return num * 2
    }

    function transform(collection){
        
        var result = Array()

        for (var i=0; i<collection.length; i++){
            result.push(tranFunc(collection[i]))
        }

        return result
    }

    console.log(transform(numbers));
}