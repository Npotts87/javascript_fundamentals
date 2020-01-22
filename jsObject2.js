let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
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
    for(var key in data){
        console.log(key.toLocaleUpperCase())
        var people = data[key]
        for(var i=0; i<people.length; i++){
            console.log(i+1, "-", people[i]['last_name'],",", people[i]['first_name'], "-", people[i]['last_name'].length + people[i]['first_name'].length )
        }
    }
}
printUsers(users)