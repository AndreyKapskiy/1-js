const user1 = {
    name: "Bob",
    age: 23,
    isStudent: true
}

const user2 = user1
user2.name = "Ann"
console.log(user1)

//const copyUser = {}
//copyUser.name = user1.name
//copyUser.age = user1.age
//copyUser.isStudent = user1.isStudent

const copyUser = {...user1}

console.log(copyUser)
console.log(copyUser === user2)

const copyUser1 = {...user1, isStudent: false}
const copyUser2 = {...user1, isMarried: false}

const address = {
    country: "Thailand",
    city: "Bangkok"
}

const copyUser3 ={...user1, ...address}

console.log(copyUser3)

const student = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: {
        country: "Thailand",
        city: "Bangkok"
    },
    courses: ["HTML", "CSS", "JS"]
}

const copyStudent = {...student}
copyStudent.courses.push("react")
console.log(student)

const copyStudent2 = {...student, courses: [...student.courses, "redux"]}
console.log(student.courses)
console.log(copyStudent2.courses)