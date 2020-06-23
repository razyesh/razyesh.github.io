/*

Ques: Write a program to sort an array of object by a target key. The original array should remain unchanged.

*/

var arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];


document.getElementById('sort').onclick = function(){

    varKeyArray = Array()
    newArr = Array()
    key = prompt("Enter key to sort (type id or name): ")
    function sortBy(array, key){
        for (var i = 0; i<array.length; i++){
            varKeyArray.push(array[i][key])
        }

        sortedArray = varKeyArray.sort();

        for (var i=0;i <array.length; i++){
            for (var j=0; j<array.length; j++){
                if (array[j][key]==varKeyArray[i]){
                    newArr.push(array[j]);
                }
            }
        }
        console.log("Old Array: ")
        console.log(array);
        console.log("New Array: ")
        console.log(newArr);
    }

    sortBy(arr, key)
}