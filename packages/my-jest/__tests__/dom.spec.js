const {generateDiv} = require("../src/dom.js");
require('../jsdom-config.js')

it('Dom测试', function () {
    generateDiv()
    expect(document.getElementsByClassName('c1').length).toBe(1)
});
