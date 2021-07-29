const validateES = subscription => {
    let weight = 9;
    const digits = subscription.split('');
    const summation = digits
            .filter((value, index) => index != 8)
            .reduce((acc, digit, index) => {
        return acc += (weight - index) * digit;
    }, 0);
    const rest = summation % 11;
    if (rest > 1) {
        return (11 - rest) === Number(digits[8]);
    }
    return Number(digits[8]) === 0;
}

module.exports = validateES
