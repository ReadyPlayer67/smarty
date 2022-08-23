//  console.log 和 console.error 中插入代码的位置信息
//一些参数的功能。
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const types = require('@babel/types')
const fs = require('fs')
const fileName = 'source.tsx'

const source = fs.readFileSync(fileName).toString()

const ast = parser.parse(source, {
    plugins: ['typescript', 'jsx']
})

//traverse会遍历ast语法树每个节点
traverse(ast, {
    //如果遇到CallExpression(调用表达式)节点会执行以下函数
    CallExpression(path) {
        const calleeStr = generator(path.node.callee).code
        console.log('calleeStr:', calleeStr)
        if (['console.log', 'console.error'].includes(calleeStr)) {
            const { line, column } = path.node.loc.start
            path.node.arguments.unshift(types.stringLiteral(`${fileName}(${line},${column}):`))

        }
    }
})

const { code, map } = generator(ast, {
    sourceMaps: true,
    fileName
})
console.log('code ', code)
