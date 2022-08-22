const delay = require('../src/delay.js')
const add = require("../src/add.js");

describe('异步测试', function () {
    it('异步测试1', done => {
        delay(() => {
            done()
        })
        expect(true).toBe(true)
    });
});

