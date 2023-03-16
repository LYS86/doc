# 悬浮窗-floaty

<Badge type="tip" text="稳定" vertical="middle" />

floaty 模块提供了悬浮窗的相关函数，可以在屏幕上显示自定义悬浮窗，控制悬浮窗大小、位置等。

悬浮窗在脚本停止运行时会自动关闭，因此，要保持悬浮窗不被关闭，可以用一个空的 `setInterval` 来实现，例如：

```js
setInterval(() => {}, 1000);
```

## floaty.checkPermission()

<Badge type="tip" text="4.2.17+" vertical="middle" />

- `retrun` {boolean}

返回当前应用是否有悬浮窗权限。（不会触发请求权限操作）

## floaty.requestPermission()

<Badge type="tip" text="4.2.17+" vertical="middle" />

跳转到系统的悬浮窗权限请求界面。

```js
if (!floaty.checkPermission()) {
  // 没有悬浮窗权限，提示用户并跳转请求
  toast(
    "本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。"
  );
  floaty.requestPermission();
  exit();
} else {
  toastLog("已有悬浮窗权限");
}
```

## floaty.window(layout)

- `layout` {xml} | {View} 悬浮窗界面的 XML 或者 View

指定悬浮窗的布局，创建并**显示**一个悬浮窗，返回一个[FloatyWindow](#floatywindow)对象。

该悬浮窗自带关闭、调整大小、调整位置按键，可根据需要调用`setAdjustEnabled()`函数来显示或隐藏。

其中 `layout` 参数可以是 xml 布局或者一个 View，更多信息参见 ui 模块的说明。

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

这段代码运行后将会在屏幕上显示悬浮文字，并在两秒后消失。

另外，因为脚本运行的线程不是 UI 线程，而所有对控件的修改操作需要在 UI 线程执行，此时需要用`ui.run`，例如:

```js
ui.run(function () {
  w.text.setText("文本");
});
```

有关返回的`FloatyWindow`对象的说明，参见下面的`FloatyWindow`章节。

## floaty.rawWindow(layout)

- `layout` {xml} | {View} 悬浮窗界面的 XML 或者 View

指定悬浮窗的布局，创建并**显示**一个原始悬浮窗，返回一个[FloatyRawWindow](#floatyrawwindow)对象。

与`floaty.window()`函数不同的是，该悬浮窗不会增加任何额外设施（例如调整大小、位置按钮），您可以根据自己需要编写任何布局。

而且，该悬浮窗支持完全全屏，可以覆盖状态栏，因此可以做护眼模式之类的应用。

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

这段代码运行后将会在屏幕上显示悬浮文字，并在两秒后消失。

有关返回的`FloatyRawWindow`对象的说明，参见下面的`FloatyRawWindow`章节。

## floaty.closeAll()

关闭所有本脚本的悬浮窗。

# FloatyWindow

悬浮窗对象，可通过`FloatyWindow.{id}`获取悬浮窗界面上的元素。例如, 悬浮窗 window 上一个控件的 id 为 aaa, 那么`window.aaa`即可获取到该控件，类似于 ui。

## window.setAdjustEnabled(enabled)

- `enabled` {boolean} 是否启用悬浮窗调整(大小、位置)

如果 enabled 为 true，则在悬浮窗左上角、右上角显示可供位置、大小调整的标示，就像控制台一样；
如果 enabled 为 false，则隐藏上述标示。

## window.setPosition(x, y)

- `x` {number} x
- `y` {number} y

设置悬浮窗位置。

## window.getX()

返回悬浮窗位置的 X 坐标。

## window.getY()

返回悬浮窗位置的 Y 坐标。

## window.setSize(width, height)

- `width` {number} 宽度
- `height` {number} 高度

设置悬浮窗宽高。

## window.getWidth()

返回悬浮窗宽度。

## window.getHeight()

返回悬浮窗高度。

## window.close()

关闭悬浮窗。如果悬浮窗已经是关闭状态，则此函数将不执行任何操作。

被关闭后的悬浮窗不能再显示。

## window.exitOnClose()

使悬浮窗被关闭时自动结束脚本运行。

# FloatyRawWindow

原始悬浮窗对象，可通过`window.{id}`获取悬浮窗界面上的元素。例如, 悬浮窗 window 上一个控件的 id 为 aaa, 那么`window.aaa`即可获取到该控件，类似于 ui。

## window.setTouchable(touchable)

- `touchable` {Boolean} 是否可触摸

设置悬浮窗是否可触摸，如果为 true, 则悬浮窗将接收到触摸、点击等事件并且无法继续传递到悬浮窗下面；如果为 false, 悬浮窗上的触摸、点击等事件将被直接传递到悬浮窗下面。处于安全考虑，被悬浮窗接收的触摸事情无法再继续传递到下层。

可以用此特性来制作护眼模式脚本。

```js
var w = floaty.rawWindow(<frame gravity="center" bg="#44ffcc00" />);

w.setSize(-1, -1);
w.setTouchable(false);

setTimeout(() => {
  w.close();
}, 4000);
```

## window.setPosition(x, y)

- `x` {number} x
- `y` {number} y

设置悬浮窗位置。

## window.getX()

返回悬浮窗位置的 X 坐标。

## window.getY()

返回悬浮窗位置的 Y 坐标。

## window.setSize(width, height)

- `width` {number} 宽度
- `height` {number} 高度

设置悬浮窗宽高。

如果设置为-1，则为占满全屏；设置为-2 则为根据悬浮窗内容大小而定。例如：

```js
var w = floaty.rawWindow(
  <frame gravity="center" bg="#77ff0000">
    <text id="text">悬浮文字</text>
  </frame>
);

w.setSize(-1, -1);

setTimeout(() => {
  w.close();
}, 2000);
```

## window.getWidht()

返回悬浮窗宽度。

## window.getHeight()

返回悬浮窗高度。

## window.close()

关闭悬浮窗。如果悬浮窗已经是关闭状态，则此函数将不执行任何操作。

被关闭后的悬浮窗不能再显示。

## window.exitOnClose()

使悬浮窗被关闭时自动结束脚本运行。
