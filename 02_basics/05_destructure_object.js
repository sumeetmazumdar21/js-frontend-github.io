
const course = {
    courseName: "JavaScript",
    courseFee: "999",
    courseInstructor: "Hitesh Chaudhary"
}

// const {courseInstructor} = course;
// console.log(courseInstructor); // Hitesh Chaudhary
const {courseInstructor: instructor} = course;
console.log(instructor); // Hitesh Chaudhary

// De-structuring in React

    // const navbar = ({company}) => {

    // }
    // navbar(company = "Google");
