function printStudent(whatsinmyhand){
    for(var i=0; i<whatsinmyhand.length; i++){
        console.log("Name: ", whatsinmyhand[i]['name'], ", " , "Cohort: ", whatsinmyhand[i]['cohort'] )
    }
    for(var pancake of whatsinmyhand){
        console.log(pancake['name'], pancake['cohort'])
    }
}
// DUMMY DATA
let students = [
    {name: 'Remy', cohort: 'Jan'}, // 0
    {name: 'Genevieve', cohort: 'March'}, // 1
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'},
]
// printStudent(students) // FUNCTION CALL(TRIGGERING)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'}, // 0
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printUsers(data){
    //  PRINTING EMPLOYEES
    for(var key in data){
        console.log(key.toLocaleUpperCase())
        var people = data[key]
        for(let i=0 ; i < people.length ;i++){
          console.log(i+1 ," - Last Name: ", people[i]['last_name'], "First Name: ", people[i]['first_name'], people[i]['first_name'].length + people[i]['last_name'].length )
       }
    }
 }
 printUsers(users)


//  let example = {
//      'first': 0,
//      'second': 0,
//      'third': 0,
//      'fourth': 0,
//      'fifth': 0,
//  }

//  function loopObject(data){
//      for(const key in data ){
//          console.log(key)
//      }
//  }

//  loopObject(example)