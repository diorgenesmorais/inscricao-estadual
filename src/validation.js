const validatorEs = require('./validatorEs')
const validatorSp = require('./validatorSp')

const validatorStateRegistration = value => {
    const length = value.replace(/[^a-z-A-Z0-9]/g, '').length
    switch(length) {
        case 9:
            return validatorEs(value)
            break
        case 12:
            return validatorSp(value)
            break
    }
    return false
}

module.exports = validatorStateRegistration
