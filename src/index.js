module.exports = function getZerosCount(number, base) {
    const simpleNumber =[2,3,5,7,11,13,17,19,23,
                        29,31,37,41,43,47,53,59,
                        61,67,71,73,79,83,89,97,
                        101,103,107,109,113,127,
                        131,137,139,149,151,157,
                        163,167,173,179,181,191,
                        193,197,199,211,223,227,
                        229,233,239,241,251];
    let arrDeliv = [];
    let sumMax = Number.MAX_VALUE;
    let sum = 0;

    simpleNumber.forEach(function (element) {
        while(base % element === 0){
            base /= element;
            arrDeliv.push(element);
        }
    });

    let result=arrDeliv.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    for (key in result){
        let num = number;
        while (num / key !== 0){
            num = num / key |0;
            sum += num;
        }
        sum = Math.floor(sum / result[key]);
        if (sum < sumMax) sumMax = sum;
        sum = 0;
    }
    return sumMax;
};