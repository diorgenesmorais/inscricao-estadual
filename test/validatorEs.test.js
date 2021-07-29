const validateES = require('../src/validatorEs')

describe('Validar inscrição estadual', () => {
    test('773892214 para o ES deve ser valida', () => {
        expect(validateES('773892214')).toBe(true)
    })

    test('224610597 para o ES deve ser valida', () => {
        expect(validateES('224610597')).toBe(true)
    })
})
