module.exports = {
  baseUrl: '/', // 存在子路径的时候需要设置
  outputDir: 'dist',  // 输入目录的名称
  // pages: {}, // 多页应用的配置
  lintOnSave: true, // 是否开启eslint检查，生效取决于是否安装了@vue/cli-plugin-eslint 插件
  runtimeCompiler: false, // 是否开启运行时编译
  // transpileDependencies: [], // 编译node_modules 目录下的指定依赖文件
  productionSourceMap: true, // 是否关闭生产环境source map
  // configureWebpack: {}, // use webpack merge 合并针对webpack的配置
  // configureWebpack: config => { // 根据场景，定制化的配置webpack
  //   // modify config 
  //   return config;
  // },
  // chainWebpack: config => { // 更加细粒度的配置webpack，依赖于webpack-chain
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //       .loader('vue-loader')
  //       .tab(options => {
  //         // modify the options
  //         return options;
  //       });
  // },
  // 'css.modules': false, // 是否开启css module，开启css module的无须在文件明中加入module的标识
  // 'css.extract': true, // 是否将css单独抽出
  // 'css.sourceMap': false, // 是否开启css sourcemap 
  // css.loaderOptions: { // css 相关的loader配置
  //   css: {
  //     // options here will be passed to css-loader
  //   },
  //   sass: {
  //     // options here will be passed to sass-loader
  //   },
  // }, 

};