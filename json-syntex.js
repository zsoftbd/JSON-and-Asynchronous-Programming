
// javaScript object
let student={
    name:'karim',
    age:20,
    id:3243,
    address:'Somewhere'
}
console.log(student)

// // JSON
// let student_json={
//     'name':'rahim',
//     'age':30,
//     'id':3244,
//     'address':'Somewhere'
// }
// console.log(student_json)

// converting JSON

let student_json=JSON.stringify(student)
console.log(student_json)
let New_student=JSON.parse(student_json)
console.log(New_student)