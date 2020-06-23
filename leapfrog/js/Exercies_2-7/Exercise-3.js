/*

part 1:

ques: Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.


*/

/*

part 2:

Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
Name: ABC School of Schoolery, Date: 2000
Name: BCD School of Trickery, Date: 2006


*/


document.getElementById('q3').onclick = function (){

    var aboutMe = {
        name : 'Rajesh Pudasaini',
        address : 'Kapan, Kathmandu',
        email : 'pudasainirajesh504@gmail.com',
        interests : ['playing', 'programming', 'trekking'],
        education : [{name : 'SLC', enrolledDate: '2010'}, {name:'+2', enrolledDate : '2015'}]
    }
    
    console.log(aboutMe)   
    for(var i=0; i<aboutMe['education'].length;i++){
        console.log('Name: '+ aboutMe['education'][i]['name'] + ',' + 'Date: ' + aboutMe['education'][i]['enrolledDate']);
    }
}