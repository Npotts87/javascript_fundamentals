let students = [
    {name: 'Remy', cohort: 'Jan'}, // 0
    {name: 'Genevieve', cohort: 'March'}, // 1
    {name: 'Chuck', cohort: 'Jan'}, // 2
    {name: 'Osmund', cohort: 'June'}, // 3
    {name: 'Nikki', cohort: 'June'}, // 4
    {name: 'Boris', cohort: 'June'}, // 5
]
function printStudent(data){
    for(var i=0; i<data.length; i++){
        console.log("Name:", data[i]['name'],"," , "Cohort:", data[i]['cohort'] );
    }
}
printStudent(students)