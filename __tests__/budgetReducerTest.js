import subject from '../client/reducers/budgetReducer'
// const subject = require('../client/reducers/budgetReducer')


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

    describe('default state', () => {
        it('should return default state when given an undefined input', () => {
            expect(subject(undefined, {type: undefined})).toEqual(state)
        })
    });

    describe('HOUSING_INPUT', () => {
        const action = {
            type: 'HOUSING_INPUT',
            payload: '56'
        };

        it('adds an input for housing', () => {
            const { housing } = subject(state, action);
            expect(housing).toBe(56)
        })

        it('returns a state object not strictly equal to the original', () => {
            const whatever = subject(state, action);
            expect(whatever).not.toBe(state);
            });

        it('clears the housing field', () => {
            const { housing } = subject(state, action);
            expect(housing).toBe(state[housing]);
            });
    });

})