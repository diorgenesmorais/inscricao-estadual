function validaRual(subscription) {
    const inscricao = subscription.split('')
    const pesos = [1, 3, 4, 5, 6, 7, 8, 10]
    const summation = pesos.reduce((acc, peso, i) => {
        return acc += Number(inscricao[i]) * peso
    }, 0)
    const rest = (summation % 11)
    return Number(inscricao[8]) === rest
}

function validate(subscription) {
    const inscricao = subscription.split('')
    const pesos = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    const summation = pesos.reduce((acc, peso, i) => {
        return acc += Number(inscricao[i]) * peso
    }, 0)
    const rest = (summation % 11)
    return Number(inscricao[11]) === rest
}

const validatorSp = subscription => {
    const value = subscription.replace(/\D/g, '')
    if (subscription.startsWith('P')) {
        return validaRual(value)
    }
    return validate(value)
}

module.exports = validatorSp
