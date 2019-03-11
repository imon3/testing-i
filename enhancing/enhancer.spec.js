const enhancer = require('./enhancer.js');
// test away!

describe('eenhancer.js', () => {
    it('should restore durability to 100', () => {
        const item = { durability: 55 };
        const repair = enhancer.repair(item);

        expect(repair.durability).toBe(100);
    });
});