# 全局变量与函数

<Badge type="tip" text="稳定" vertical="middle" />

全局变量和函数在所有模块中均可使用。 但以下变量的作用域只在模块内，详见 [module](modules.md)：

- exports
- module
- require()

以下的对象是特定于 Auto.js 的。 有些内置对象是 JavaScript 语言本身的一部分，它们也是全局的。

一些模块中的函数为了使用方便也可以直接全局使用，这些函数在此不再赘述。例如 timers 模块的 setInterval, setTimeout 等函数。

## sleep(n)

- `n` {number} 毫秒数

暂停运行 n**毫秒**的时间。1 秒等于 1000 毫秒。

```js
//暂停5毫秒
sleep(5000);
```

## currentPackage()

- `return` {string}

返回最近一次监测到的正在运行的应用的包名，一般可以认为就是当前正在运行的应用的包名。

此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

## currentActivity()

- `return` {string}

返回最近一次监测到的正在运行的 Activity 的名称，一般可以认为就是当前正在运行的 Activity 的名称。

此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

## setClip(text)

- `text` {string} 文本

设置剪贴板内容。此剪贴板即系统剪贴板，在一般应用的输入框中"粘贴"既可使用。

```js
setClip("剪贴板文本");
```

## getClip()

- `return` {string}

返回系统剪贴板的内容。

```js
toast("剪贴板内容为:" + getClip());
```

## toast(message)

- `message` {string} 要显示的信息

以气泡显示信息 message 几秒。(具体时间取决于安卓系统，一般都是 2 秒)

注意，连续显示多个 toast 时，会排队显示，即使脚本已经结束，toast 可能仍然会显示。例如:

```js
for (var i = 0; i < 20; i++) {
  toast(i);
}
```

运行这段程序以后，会很快执行完成，且不断弹出消息，在任务管理中关闭所有脚本也无法停止。
要保证气泡消息才继续执行可以用：

```js
for (var i = 0; i < 100; i++) {
  toast(i);
  sleep(2000);
}
```

```js
var _toast_ = toast;
toast = function (message) {
  _toast_(message);
  sleep(2000);
};
for (var i = 0; i < 100; i++) {
  toast(i);
}
```

或者修改 toast 函数：

```js
importClass(android.widget.Toast);

let toast = (function () {
  let toast = null;
  function showText(msg) {
    var msg = msg.toString();
    if (!toast) {
      toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    } else {
      toast.setText(msg);
    }
    toast.show();
  }
  return showText;
})();
module.exports = toast;
```

## toastLog(message)

- `message` {string} 要显示的信息

相当于`toast(message);log(message)`。显示信息 message 并在控制台中输出。参见 console.log。

## waitForActivity(activity[, period = 200])

- `activity` {String} Activity 名称
- `period` {Number} 轮询等待间隔（毫秒）

等待指定的 Activity 出现，period 为检查 Activity 的间隔。

## waitForPackage(package[, period = 200])

- `package` {String} 包名
- `period` {Number} 轮询等待间隔（毫秒）

等待指定的应用出现。例如`waitForPackage("com.tencent.mm")`为等待当前界面为微信。

## exit()

立即停止脚本运行。

立即停止是通过抛出`ScriptInterrupttedException`来实现的，因此如果用`try...catch`把 exit()函数的异常捕捉，则脚本不会立即停止，仍会运行几行后再停止。

## random(min, max)

- `min` {number} 随机数产生的区间下界
- `max` {number} 随机数产生的区间上界
- `return` {number}

返回一个在[min...max]之间的随机数。例如 random(0, 2)可能产生 0, 1, 2。

## random()

- `return` {number}

返回在(0-1)的随机浮点数。

## requiresApi(api)

- `api` {Number} Android 版本号

表示此脚本需要 Android API 版本达到指定版本才能运行。例如`requiresApi(19)`表示脚本需要在 Android 4.4 以及以上运行。

调用该函数时会判断运行脚本的设备系统的版本号，如果没有达到要求则抛出异常。

可以参考以下 Android API 和版本的对照表:

| API Level | SDK 版本 | 发布日期      |
| --------- | -------- | ------------- |
| 15        | 4.0.3    | 2011 年 12 月 |
| 16        | 4.1      | 2012 年 7 月  |
| 17        | 4.2      | 2012 年 11 月 |
| 18        | 4.3      | 2013 年 7 月  |
| 19        | 4.4      | 2013 年 10 月 |
| 21        | 5.0      | 2014 年 11 月 |
| 22        | 5.1      | 2015 年 3 月  |
| 23        | 6.0      | 2015 年 10 月 |
| 24        | 7.0      | 2016 年 8 月  |
| 25        | 7.1      | 2016 年 12 月 |
| 26        | 8.0      | 2017 年 8 月  |
| 27        | 8.1      | 2017 年 12 月 |
| 28        | 9.0      | 2018 年 8 月  |
| 29        | 10.0     | 2019 年 9 月  |
| 30        | 11.0     | 2020 年 9 月  |
| 31        | 12.0     | 2021 年 8 月  |

[Android API 版本](https://source.android.com/docs/setup/about/build-numbers?hl=zh-cn)

## requiresAutojsVersion(version)

- `version` {string} | {number} Auto.js 的版本或版本号

表示此脚本需要 Auto.js 版本达到指定版本才能运行。例如`requiresAutojsVersion("3.0.0 Beta")`表示脚本需要在 Auto.js 3.0.0 Beta 以及以上运行。

调用该函数时会判断运行脚本的 Auto.js 的版本号，如果没有达到要求则抛出异常。

version 参数可以是整数表示版本号，例如`requiresAutojsVersion(250)`；也可以是字符串格式表示的版本，例如"3.0.0 Beta", "3.1.0 Alpha4", "3.2.0"等。

可以通过`app.autojs.versionCode`和`app.autojs.versionName`获取当前的 Auto.js 版本号和版本。

## runtime.requestPermissions(permissions)

- `permissions` {Array} 权限的字符串数组

动态申请安卓的权限。例如：

```js
//请求GPS权限
runtime.requestPermissions(["access_fine_location"]);
```

尽管安卓有很多权限，但必须写入 Manifest 才能动态申请，为了防止权限的滥用，目前 Auto.js 只能额外申请两个权限：

- `access_fine_location` GPS 权限
- `record_audio` 录音权限

您可以通过 APK 编辑器来增加 Auto.js 以及 Auto.js 打包的应用的权限。

安卓所有的权限列表参见[Permissions Overview](https://developer.android.com/guide/topics/permissions/overview)。（并没有用）

## runtime.loadJar(path)

- `path` {string} jar 文件路径

加载目标 jar 文件，加载成功后将可以使用该 Jar 文件的类。

```js
// 加载jsoup.jar
runtime.loadJar("./jsoup.jar");
// 使用jsoup解析html
importClass(org.jsoup.Jsoup);
log(Jsoup.parse(files.read("./test.html")));
```

(jsoup 是一个 Java 实现的解析 Html DOM 的库，可以在[Jsoup](https://jsoup.org/download)下载)

## runtime.loadDex(path)

- `path` {string} dex 文件路径

加载目标 dex 文件，加载成功后将可以使用该 dex 文件的类。

因为加载 jar 实际上是把 jar 转换为 dex 再加载的，因此加载 dex 文件会比 jar 文件快得多。可以使用 Android SDK 的 build tools 的 dx 工具把 jar 转换为 dex。

## context

全局变量。一个 android.content.Context 对象。

注意该对象为 ApplicationContext，因此不能用于界面、对话框等的创建。
