
export interface StudentQuiz {
    studentId: number,
    quizAnswers: number[],

}

export function gradeStudent(studentAnswers:number[], correct: number[]): number {
let score=0;
for(let i=0;i<studentAnswers.length; i++){
    if(studentAnswers[i]===correct[i]){
        score++;
    }
}
return score;
}

export function gradeQuiz(quiz: StudentQuiz[], correct: number[]): number[] {
    //IMPLEMENT THIS
    const scores: number[] = [];

    for (const student of quiz) {
        const score = gradeStudent(student.quizAnswers, correct);
        scores.push(score);
    }

    return scores;
}





export function gradeQuizLabeled(studentId:number,quizAnswers:number[]):StudentQuiz{
 const correctAnswer=[3, 1, 2, 4];
 const scores= gradeStudent(quizAnswers,correctAnswer);
 return {
    studentId:studentId,
    quizAnswers:quizAnswers,
    
 }
}
//IMPLEMENT THIS

