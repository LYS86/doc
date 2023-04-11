# 悬浮窗-floaty

<Badge type="tip" text="稳定" vertical="middle" />
floaty 模块提供了悬浮窗的相关函数，可以在屏幕上显示自定义悬浮窗，并控制悬浮窗的大小、位置等。 
在使用 floaty 模块之前，应先检查并获取悬浮窗的权限，否则将无法正常执行悬浮窗相关的代码。检查和获取悬浮窗权限的方法如下：

## floaty.checkPermission()

<Badge type="tip" text="v4.2.17+" vertical="middle" />

检查当前应用是否已经具有悬浮窗权限。

```js
if (!floaty.checkPermission()) {
  toastLog("请先授予悬浮窗权限");
} else {
  // 进行悬浮窗的相关操作
}
```

## floaty.requestPermission()

<Badge type="tip" text="v4.2.17+" vertical="middle" />
请求用户授予悬浮窗权限。调用该函数后，将会跳转到系统设置界面，用户需要手动允许悬浮窗权限。

```js
if (!floaty.checkPermission()) {
  toastLog("请先授予悬浮窗权限");
  floaty.requestPermission();
} else {
  // 进行悬浮窗的相关操作
}
```

## floaty.window(layout)

创建并显示一个悬浮窗。返回一个`FloatyWindow`

- `layout` {xml} | {View} 悬浮窗界面的 XML 或者 View

例子：

```js
var w = floaty.window(
  <frame gravity="center">
    <text id="text">悬浮文字</text>
  </frame>
);

setTimeout(() => {
  w.close();
}, 2000);
```

## floaty.rawWindow(layout)

创建并显示一个原始悬浮窗。与`floaty.window()`函数不同的是，该悬浮窗不会增加任何额外设施（例如调整大小、位置按钮），您可以根据自己需要编写任何布局。返回一个`FloatyRawWindow`

```js
var w = floaty.rawWindow(
  <frame gravity="center">
    <text id="text">悬浮文字</text>
  </frame>
);

w.setPosition(500, 500);

setTimeout(() => {
  w.close();
}, 2000);
```

# FloatyWindow 和 FloatyRawWindow 对象

通过使用`floaty.window()`或`floaty.rawWindow()`函数创建悬浮窗时，将返回一个 `FloatyWindow` 或 `FloatyRawWindow` 对象。下文用`window`简称，这两个对象都具有以下方法：

### window.setPosition(x, y)

设置悬浮窗的位置。

- `x` {number} 悬浮窗的 X 坐标
- `y` {number} 悬浮窗的 Y 坐标

### window.getX()

返回悬浮窗的 X 坐标。

### window.getY()

返回悬浮窗的 Y 坐标。

### window.setSize(width, height)

设置悬浮窗的大小。

- `width` {number} 悬浮窗的宽度
- `height` {number} 悬浮窗的高度

### window.getWidth()

返回悬浮窗的宽度。

### window.getHeight()

返回悬浮窗的高度。

### window.close()

关闭悬浮窗。

### window.exitOnClose()

设置当悬浮窗关闭时是否自动结束脚本运行。如果将该方法的参数设置为`true`，则当悬浮窗被关闭时，脚本将自动停止运行。

### window.setAdjustEnabled(enabled)

设置悬浮窗是否可调整大小和位置。仅`FloatyWindow`可用

- `enabled` {boolean} 是否启用悬浮窗调整(大小、位置)

### window.setTouchable(touchable)

设置悬浮窗是否可触摸。如果设置为`false`，则悬浮窗上的触摸、点击等事件将直接传递到悬浮窗下面。仅`FloatyRawWindow`可用

- `touchable` {boolean} 是否可触摸
