//禁用npm,yarn等包管理工具，只允许pnpm，防止混乱
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    // console.log(process.env.npm_execpath)
    console.warn(
        `\u001b[33mThis repository requires using pnpm as the package manager` +
        ` for scripts to work properly.\u001b[39m\n`
    )
    process.exit(1)
}
