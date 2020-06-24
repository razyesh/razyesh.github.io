/*

Write a program to normalize a given input to get the expected output.


*/

var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };

newObj = {}
output = {}

function normalize(){
  for (const detail in input){
    if (input[detail]['children']){
      newObj['id'] = input[detail]['id'];
      newObj['name'] = input[detail]['name'];
      newObj['children'] = (input[detail]['children']).map(function (child){ return child['id'];})
      output[`${newObj['id']}`] = newObj
      newObj = {}
      for (var i=0; i<input[detail]['children'].length ; i++){
       if(input[detail]['children'][i]['children']){
         input[detail]['children'][i]['children'].forEach(updateFunction);
       }
        newObj['id'] = input[detail]['children'][i]['id'];
        newObj['name'] = input[detail]['children'][i]['name'];
        output[`${newObj['id']}`] = newObj;
        newObj = {}
      }

    } else {
      newObj['id'] = input[detail]['id'];
      newObj['name'] = input[detail]['name'];
      output[`${newObj['id']}`] = newObj
    }
  }
  
  console.log(output)
  
}

function updateFunction(item, index){
  newObj['id'] = item['id'];
  newObj['name'] = item['name'];
  output[`${item['id']}`] = newObj;
  newObj = {}
}

normalize();