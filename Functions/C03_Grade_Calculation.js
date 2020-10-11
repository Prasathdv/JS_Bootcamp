// This challenge in function module is to calculate the grade and score % of given student.
//  conditions
// Output values : students score , total possible score
//  template to print - 'You got C (75%) grade '
//  Grade value : A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const ScoreCard = function (studentsScore=0, totalPossibleScore=100){
    
    const mark = (studentsScore/totalPossibleScore)*100
    let grade =''
    if(mark>=90){
        grade = 'A'
    } else if(mark >=80 && mark <90){
        grade = 'B'
    } else if (mark >=70 && mark <80){
        grade = 'C'
    } else if (mark >=60 && mark <70){
        grade = 'D'
    } else{
        grade = 'F'
    }
    return `You got ${grade}(${mark}%) grade`
}

const student1Grade = ScoreCard(92,100)
console.log(student1Grade);
const student2Grade = ScoreCard(12,20)
console.log(student2Grade);
const student3Grade = ScoreCard(70,200)
console.log(student3Grade);
const student4Grade = ScoreCard(23,50)
console.log(student4Grade);
const student5Grade = ScoreCard(10,10)
console.log(student5Grade);
const student6Grade = ScoreCard()
console.log(student6Grade);
const student7Grade = ScoreCard(10)
console.log(student7Grade);
const student8Grade = ScoreCard(null,25)
console.log(student8Grade);
