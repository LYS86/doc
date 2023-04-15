# module (模块) <Badge type="tip" text="稳定" vertical="middle" />

AutoX.js 中的 `module` 模块是一个遵守 CommonJS 规范的模块系统实现，用于在脚本中加载和导出模块。

## `exports`

`exports` 是一个空对象，用于将模块内的函数、变量和对象导出为模块的公共接口。可以将需要导出的内容直接赋值给 `exports` 对象的属性，例如：

```js
// 导出 add 函数
exports.add = function (a, b) {
  return a + b;
};
```

- `exports` 是 `module.exports` 的引用，即 `exports = module.exports`。如果直接给 `exports` 赋值，相当于断开了 `exports` 对 `module.exports` 的引用，导出的就不再是 `exports` 中定义的内容。换句话说，只能给 `exports` 添加属性，不能给 `exports` 赋新值。

## `module.exports`

`module.exports` 属性指定了模块默认导出的对象。当导入一个模块时，实际上是导入该模块的 `module.exports` 对象。如果希望导出的是一个自定义对象或者函数，可以将其直接赋值给 `module.exports`，例如：

```js
// 导出一个函数
module.exports = function (a, b) {
  return a + b;
};
```

## `require(id)`

`require()` 函数用于加载其他模块或 JSON，并返回导出内容。参数 `id` 是要加载的模块名称或路径，支持相对路径和绝对路径。

- `id` {String}

当加载模块时，会按以下顺序查找文件，直到找到为止：

1. 当前目录及其子目录 `node_modules` 文件夹。
2. 若未找到，则向上查找，直到到达文件系统的根目录
3. 若还是找不到，则尝试查找 `/node_modules` 和 `/node_libraries` 文件夹。
4. 如果 `id` 是内置模块的名称，且不存在同名文件，则直接加载内置模块。例如：`let console = require('__console__')`。Autox.js 还内置了 `lodash.js` 库。

如果按确切的文件名没有找到模块，会尝试添加以下拓展名再加载：`.js`、`.json`。

找不到则作为目录解析，尝试加载以下文件：

1. 该目录下的 `package.json`，并根据 `package.json` 文件中的 `main` 字段加载指定入口点。例如：如果 `package.json` 中的 `main` 字段指定为 `'src/index.js'`，则会加载 `id/src/index.js`。
2. 如果 `package.json` 文件不存在或者 `main` 字段无效，则会默认加载该目录下的 `index.js` 文件。

`.json` 文件被解析为 JSON 文本文件，并返回一个 JavaScript 对象。

值得注意的是，当存在循环依赖的情况时，可以通过在函数内仅引用需使用的部分进行避免。同时，我们也应该在设计模块之间的依赖时，尽量避免出现循环依赖。
