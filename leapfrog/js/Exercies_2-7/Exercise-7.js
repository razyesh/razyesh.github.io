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

  children = Array()

  for (var i=1; i<=input.length; i++){
      for (var j=0; j<input[`${i}`]['children'].length; j++){
            console.log('ok')
            children.push(input[i]['children'][j])
      }
  }

  console.log(children)