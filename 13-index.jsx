/* 
  代码分割之import静态导入
*/

/* 
  打包 -> 整体打包成一个bundle的一个JS文件
  代码、模块是加载的时候不需要 -> 分割出来单独形成一个文件块 chunk
  模块懒加载
  减少应用体积
*/

/* 
  模块：ES module -> ES6 -> import export
  import 导入模块
  import 是一个ES6的模块化关键字,不是一个函数 import()/import
  import -> 静态导入(static import) import xxx from '' / 动态导入(dynamic import) import('');
  import 可以被调用() vs 普通函数 -> import 不是一个对象
  typeof typeof(xxx) / typeof xxx -> typeof也是一个关键字
  import() -> 动态导入模块

  static import -> 模块静态导入
    导入并加载时，导入的模块会被编译 -> 不是按需编译

  dynamic import -> 模块的动态导入
    根据条件或按需的模块导入
    应用场景：
      1 模块太大了，使用可能性很低的模块，这些模块不需要马上加载
      2 模块的导入占用大量的系统内存
      3 模块需要异步获取
      4 导入模块时需要动态构建路径（说明符）import xxx from './'+a+b+c+'.js' 这种方式不行
        import('./'+a+b+c+'.js');   动态说明符
        static import 只支持静态说明符
      5 模块中的代码需要程序触发了某些条件才运行的

  不要滥用：静态导入是有利于初始化依赖，静态程序分析，tree shaking 静态导入会使其更好的工作

  动态模块返回一个Promise
*/

var btn = document.getElementById('btn');
btn.onclick = async function () {
  /* var { default: test } = await import('./13-1-module')
  new test */
  var Test = await import('./13-1-module').then(res => res.default)
  var { plus } = await import('./13-2-module');
  new Test
  console.log(plus(1, 2))
}