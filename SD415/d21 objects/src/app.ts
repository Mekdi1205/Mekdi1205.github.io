
// // use this file for any code you want to try out
// /*Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢ push the students into an array, quizAnswers
// */
// type Student={
//     studentId:number,
//     quizAnswers:number[]
// }
// const student1:Student={
//     studentId:101,
//     quizAnswers:[1, 1, 2,4] 
// };
//  const student2:Student={
//     studentId:102,
//     quizAnswers:[2, 1, 2,2] 
// };
// const student3:Student={
//     studentId:103,
//     quizAnswers:[3, 1, 3,4] 
// };
// const studentArray=[student1,student2,student3];

// function computeScore(stu:Student,correctAns:number[]):number{
//     let score=0;
//     for(let i=0;i<stu.quizAnswers.length; i++){
//         if(stu.quizAnswers[i]===correctAns[i]){
// score++;
//         }
//     }
//     return score;
// }
// //write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g., [3,1,2,4] and returns an array that has scores for each student.  Their score is the number of correct answers. 
// //  expect   [ 3, 2, 3 ]
// //  use a helper function to compute the score for a given student
// function gradeQuiz(studentArray:Student[],correctAns:number[]):number[]{
//     let answerArray:number[]=[];
//     for(let ele of studentArray){
//       answerArray.push(computeScore(ele,correctAns));
//     }
//     return answerArray;
// }
// const correctAns=[3,1,2,4];
// const scores=gradeQuiz(studentArray,correctAns);
// console.log(scores);
// type Person = {
//     name: string;
//     age: number;
//     job: string;
//     sayHi(this: Person): void;
//     }
//    const manager: Person = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer",
//     sayHi: sayHowdy
//     };
//     const intern: Person= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern",
//     sayHi: sayHowdy
//     };
   
//    function sayHowdy(this: Person) {
//    console.log("Hello, my name is ", this.name+" "+"i am "+this.age+" i am "+this.job);
//    //manager.sayHi();
//    //intern.sayHi();
//    }
//    manager.sayHi();
//    intern.sayHi();
// What will appear in console when this code runs? Enter BLANK if nothing is there.
// (Assume curly brace for where you see [ and ] -- Sakai issue )
