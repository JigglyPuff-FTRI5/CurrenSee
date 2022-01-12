import subject from './client/reducers/budgetReducer.js'

describe('Budget reducer', () => {
    let state;

    beforeEach(() => {
        state = {
            housing: '0',
            health: '0',
            auto: '0',
            education: '0',
            loans: '0',
            savings: '0',
            investments: '0',
            charity: '0',
            misc: '0',
            income: '0',
            budget: '0'
        }
    });

    describe('HOUSING_INPUT', () => {
        const action = {
            type: 'HOUSING_INPUT',
            payload: '56'
        }
    });

})