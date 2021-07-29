const validatorStateRegistration = require('../src/validation')

describe('Testar va possibilidade multipla de valores', () => {
    test('773892214 para o ES deve ser valida', () => {
        expect(validatorStateRegistration('773892214')).toBe(true)
    })

    test('110.042.490.114 para SP deve ser valida', () => {
        expect(validatorStateRegistration('110.042.490.114')).toBe(true)
    })
})