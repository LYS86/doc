# Base64 编码

<Badge type="tip" text="稳定" vertical="middle" />

提供基本的 Base64 转换函数。

## $base64.encode(str[, encoding = 'utf-8'])

- `str` {string} 要编码的字符串
- `encoding` {string} 可选，字符编码

将字符串使用 Base64 编码并返回编码后的字符串。

```js
log($base64.encode("autox.js"));
// 日志输出 YXV0b3guanM=
```

## $base64.decode(str[, encoding = 'utf-8'])

- `str` {string} 要解码的字符串
- `encoding` {string} 可选，字符编码

将字符串使用 Base64 解码并返回解码后的字符串。

```js
log($base64.decode("YXV0b3guanM="));
// 日志输出 autox.js
```
