# ML kit OCR

<Badge type="tip" text="6.3.4+" vertical="middle" /> <Badge type="warning" text="实验" vertical="middle" />

## gmlkit.ocr(img, language)

对给定的图像进行文字识别。

- `img` {Image} 图片
- `Language` {String} 识别语言，可选值为：
  - `la` 拉丁
  - `zh` 中文
  - `sa` 梵文
  - `ja` 日语
  - `ko` 韩语
  - [其他语言][其他语言]
- `retrun`{[Result](#Result)} 文字识别结果。

```js
// 识别中文
let result = gmlkit.ocr(img, "zh");
console.log(result.text);
```

## gmlkit.ocrText(img, language)

对给定的图像进行文字识别，并返回识别到的文本字符串。

- `img` {Image} 图片
- `Language` {String} 识别语言，可选值为：
  - `la` 拉丁
  - `zh` 中文
  - `sa` 梵文
  - `ja` 日语
  - `ko` 韩语
  - [其他语言][其他语言]
- `retrun` {String} 识别到的文本字符串。

```js
// 识别中文
let result = gmlkit.ocrText(img, "zh");
console.log(result);
```

## Result

表示 Google ML Kit 文字识别返回的结果,有以下几个属性：

- `level` {Number} 结果的层级。
- `confidence` {Number} 识别结果的置信度。
- `text` {String} 识别到的文本。
- `language` {String} 识别到的语言。
- `bounds` {[Rect][rect]} 文本在图片中的位置
- `children` {Array} 子列表，包含更详细的内容。

### Result.find(predicate)

查找符合条件的第一个元素，没找到则返回 `null`。

- `predicate` {Function} 用于判断的函数，接受一个 `Result` 对象作为参数。
- `return` {Result}

### Result.find(level,predicate)

查找指定层级中符合条件的第一个元素，没找到则返回 `null`。

- `level` {Number} 指定的层级。
- `predicate` {Function} 用于判断的函数，接受一个 `Result` 对象作为参数。
- `return` {Result}

### Result.filter(predicate)

查找符合条件的所有元素

- `predicate` {Function} 用于判断的函数，接受一个 `Result` 对象作为参数。
- `return` {Array} Java 数组

### Result.filter(level,predicate)

在指定层级中查找符合条件的所有元素

- `level` {Number} 指定的层级。
- `predicate` {Function} 用于判断的函数，接受一个 `Result` 对象作为参数。
- `return` {Array} Java 数组

### Result.toArray()

将结果转换成数组

- `return` {Array} Java 数组

### Result.toArray(level)

将指定层级结果转换成数组

- `level` {Number} 层级
- `return` {Array} Java 数组

### Result.sort()

根据`bounds`的位置对原结果进行排序

### Result.sorted()

同上,返回排序后的 Result 对象

- `return` {Result}

  [其他语言]: https://developers.google.com/ml-kit/vision/text-recognition/v2/languages?hl=zh-cn
  [rect]: https://developer.android.google.cn/reference/kotlin/android/graphics/Rect?hl=en
