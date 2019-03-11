const enhancer = require('./enhancer.js');
// test away!

describe('repair()', () => {
    it('should restore durability to 100', () => {
        const item = { durability: 55 };
        const repair = enhancer.repair(item);

        expect(repair.durability).toBe(100);
    });
});

describe('succeed()', () => {
    it('should enhance the item by 1', () => {
        const item = { enhancement: 10 }
        const succeed = enhancer.succeed(item);

        expect(succeed.enhancement).toBe(11)
    })
})