module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
          "ie": "8"
        },
        "useBuiltIns": "usage", // 配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill
        "corejs": "3.6.5"
      }
    ]
  ]
}
