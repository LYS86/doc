# 关于本文档

文档中使用一些标签来标记状态：

- <Badge type="tip" text="稳定" vertical="middle" /> 在未来的更新中这些模块已有的函数一般不会被更改，会保证后向兼容性。
- <Badge type="warning" text="实验" vertical="middle" /> 在未来的更新中可能会更改或移除。应该谨慎使用这些函数或模块，或者仅用作临时或试验用途。
- <Badge type="danger" text="弃用" vertical="middle" /> 在未来的更新中将很快会被移除或更改。应该在脚本中移除对这些函数的使用，以免后续出现意料之外的问题。
- <Badge type="tip" text="v4.1.0+" vertical="middle" /> 版本号，代表该函数在某个版本加入，v：版本，数字：版本号，+：后续版本
- <Badge type="tip" text="Android 7+" vertical="middle" /> 安卓版本，低于此版本无效果
- <Badge type="tip" text="Root" vertical="middle" /> 基于 Root 运行
- <Badge type="tip" text="无障碍" vertical="middle" /> 基于 无障碍 运行

## images.detectsColor(image, color, x, y[, threshold = 16, algorithm = "diff"])

images 表示全局函数，也代表一个模块，detectsColor 表示带调用 images 模块的 detectsColor 函数，方括号代表可选参数，threshold = 16 表示 threshold 的默认值是 16

- `image` {Image}

{}内为 image 的数据类型

```js
images.detectsColor(captureScreen(), "#112233", 100, 200);
//相当于
images.detectsColor(captureScreen(), "#112233", 100, 200, 16, "rgb");
```

## console.log(data,[...args])

...args 表示这是一个可变参数，处理 data 参数以外，还接受多个 args 参数

```js
console.log(1);
console.log(1, 2);
console.log(1, 2, 3);
```

**调用有可选参数及默认值的函数时请不要写上方括号和等于号。**
