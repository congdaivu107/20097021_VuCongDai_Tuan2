const calculateBMI = (mass, height) => mass / (height * height);

const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95; 

const markMass2 = 95; 
const markHeight2 = 1.88; 
const johnMass2 = 85; 
const johnHeight2 = 1.76; 

const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
const markHigherBMI1 = markBMI1 > johnBMI1;

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;

const printBMIComparison = (markBMI, johnBMI) => {
  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
  } else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
  }
};

printBMIComparison(markBMI1, johnBMI1);

printBMIComparison(markBMI2, johnBMI2);
