const validatorSp = require('../src/validatorSp')

describe('Validar inscrições estaduais para SP', () => {
    test('P-011000424.3/002 para SP deve ser valida', () => {
        expect(validatorSp('P-011000424.3/002')).toBe(true)
    })

    test('963171291065 para SP deve ser valida', () => {
        expect(validatorSp('963171291065')).toBe(true)
    })

    test('110.042.490.114 para SP deve ser valida', () => {
        expect(validatorSp('110.042.490.114')).toBe(true)
    })
})
