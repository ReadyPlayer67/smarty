const add = require('../src/add.js')

describe('测试Add函数', function () {
    it('add(1,2) === 3', function () {
        expect(add(1,2)).toBe(3)
    });
});
