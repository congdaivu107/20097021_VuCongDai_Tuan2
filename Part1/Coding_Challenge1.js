const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95; 

const markMass2 = 95;
const markHeight2 = 1.88; 
const johnMass2 = 85; 
const johnHeight2 = 1.76;

const calculateBMI = (mass, height) => mass / (height * height);

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(`Data 1: Mark's BMI = ${markBMI1.toFixed(2)}, John's BMI = ${johnBMI1.toFixed(2)}`);
console.log(`Mark's BMI is higher than John's: ${markHigherBMI1}`);

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Data 2: Mark's BMI = ${markBMI2.toFixed(2)}, John's BMI = ${johnBMI2.toFixed(2)}`);
console.log(`Mark's BMI is higher than John's: ${markHigherBMI2}`);
