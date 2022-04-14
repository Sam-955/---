const path=require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭语法检查

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      //那些文件自动引入，使用绝对路径
      //用到path.join 来拼接完整路径
      patterns: [
       path.join(__dirname,"./src/assets/styles/mixins.less"),
       path.join(__dirname,"./src/assets/styles/variables.less"),
      ]
    }
  }
  // 安装这个插件以后，在使用公共的变量可以每个都导入路径
})
