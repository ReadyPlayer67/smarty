const {getData} = require('../src/fetch.js')
const axios = require('axios')
//模拟axios行为
jest.mock('axios')

it('测试fetch', async function () {
    //模拟第一次接收到的数据，返回一个Promise
    axios.get.mockResolvedValueOnce("123")
    axios.get.mockResolvedValueOnce("456")
    const data1 = await getData()
    const data2 = await getData()
    expect(data1).toBe('123')
    expect(data2).toBe('456')
});
