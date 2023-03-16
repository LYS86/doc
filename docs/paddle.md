# paddle

<Badge type="tip" text="5.6.1" vertical="middle" /> <Badge type="warning" text="实验" vertical="middle" />

## paddle.ocr(image,useSlim)

使用指定的 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `useSlim` {Boolean} 加载的模型,可选值:
  - `true` ocr_v2_for_cpu(slim) :快速模型
  - `false` ocr_v2_for_cpu : 精准模型
- `return` {Array} 识别结果数组,值为 [OcrResult](#ocrresult)

## paddle.ocr(image,[cpuThreadNum,useSlim])

使用指定的 CPU 核心数和 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `cpuThreadNum` {Number} 用于执行 OCR 的 CPU 核心数。默认值:系统的 CPU 核心数
- `useSlim` {Boolean} 加载的模型,可选值:
  - `true` ocr_v2_for_cpu(slim) :快速模型,默认
  - `false` ocr_v2_for_cpu : 精准模型
- `return` {Array} 识别结果数组,值为 [OcrResult](#ocrresult)

## paddle.ocr(image,cpuThreadNum,myModelPath)

使用指定的 CPU 核心数和自定义 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `cpuThreadNum` {Number} 用于执行 OCR 的 CPU 核心数。
- `myModelPath` {String} 自定义 OCR 模型的绝对路径。
- `return` {Array} 识别结果数组,值为 [OcrResult](#ocrresult)

## paddle.ocr(image,myModelPath)

使用自定义 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `myModelPath` {String} 自定义 OCR 模型的绝对路径。
- `return` {Array} 识别结果数组,值为 [OcrResult](#ocrresult)

## paddle.ocrText(image,useSlim)

使用指定的 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `useSlim` {Boolean} 加载的模型,可选值:
  - `true` ocr_v2_for_cpu(slim) :快速模型
  - `false` ocr_v2_for_cpu : 精准模型
- `return` {String} 识别到的文本字符串。

## paddle.ocrText(image,[cpuThreadNum,useSlim])

使用指定的 CPU 核心数和 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `cpuThreadNum` {Number} 用于执行 OCR 的 CPU 核心数。默认值:系统的 CPU 核心数
- `useSlim` {Boolean} 加载的模型,可选值:
  - `true` ocr_v2_for_cpu(slim) :快速模型,默认
  - `false` ocr_v2_for_cpu : 精准模型
- `return` {String} 识别到的文本字符串。

## paddle.ocrText(image,cpuThreadNum,myModelPath)

使用指定的 CPU 核心数和自定义 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `cpuThreadNum` {Number} 用于执行 OCR 的 CPU 核心数。
- `myModelPath` {String} 自定义 OCR 模型的绝对路径。
- `return` {String} 识别到的文本字符串。

## paddle.ocrText(image,myModelPath)

使用自定义 OCR 模型来执行 OCR。

- `image` {Image} 要执行 OCR 的图像。
- `myModelPath` {String} 自定义 OCR 模型的绝对路径。
- `return` {String} 识别到的文本字符串。

### OcrResult

`OcrResult` 是一个表示 OCR 结果的类。它包含以下字段：

- `confidence` {Number} 识别的置信度。
- `preprocessTime` {Number} 预处理时间。
- `inferenceTime` {Number} 推理时间。
- `text` {String} 识别出的文本。
- `bounds` {[Rect](https://developer.android.google.cn/reference/kotlin/android/graphics/Rect?hl=en)} 文本在图像中的位置
