const calculateAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

const determineWinner = (dolphinsAvg, koalasAvg, minScore = 100) => {
    if (dolphinsAvg >= minScore && koalasAvg >= minScore) {
        if (dolphinsAvg > koalasAvg) {
            return "Dolphins win!";
        } else if (koalasAvg > dolphinsAvg) {
            return "Koalas win!";
        } else {
            return "It's a draw!";
        }
    } else if (dolphinsAvg >= minScore && koalasAvg < minScore) {
        return "Dolphins win!";
    } else if (koalasAvg >= minScore && dolphinsAvg < minScore) {
        return "Koalas win!";
    } else {
        return "No team wins the trophy";
    }
};

const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

console.log(`Data 1: ${determineWinner(dolphinsAvg1, koalasAvg1)}`);

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

console.log(`Bonus Data 1: ${determineWinner(dolphinsAvgBonus1, koalasAvgBonus1)}`);

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

console.log(`Bonus Data 2: ${determineWinner(dolphinsAvgBonus2, koalasAvgBonus2)}`);
