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
        const item = { enhancement: 20 };
        const succeed = enhancer.succeed(item);

        expect(succeed.enhancement).toBe(20);
    });
});

describe('fail()', () => {
    it('should decreased durability by 5 when enhancement is less than 15, or by 10 if durability is 15 or greater. If enhancement is greater than 16 then decrease enhancement by 1', () => {
        const item = { durability: 4, enhancement: 17 };
        const fail = enhancer.fail(item);

        expect(fail.durability).toBe(0);
        expect(fail.enhancement).toBe(16);
    });
});

describe('get()', () => {
    it('should return a modified name', () => {
        const item = { durability: 68, enhancement: 17, name: 'superSword' };
        const get = enhancer.get(item);

        expect(get.name).toBe(`[+17]superSword`)
    })
})