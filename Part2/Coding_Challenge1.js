const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphinsData1 = calcAverage(44, 23, 71);
const avgKoalasData1 = calcAverage(65, 54, 49);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log('No team wins');
    }
};

console.log('Data 1:');
checkWinner(avgDolphinsData1, avgKoalasData1);

console.log('Data 2:');
checkWinner(avgDolphinsData2, avgKoalasData2);
