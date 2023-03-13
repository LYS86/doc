# 加密-crypto

<Badge type="tip" text="稳定" vertical="middle" />

\$crypto 模块提供了对称加密（例如 AES）、非对称加密（例如 RSA）、消息摘要（例如 MD5, SHA）等支持。

## $crypto.Key(data,[options])

- `data` {any} 密钥的内容，根据 `options.input` 指定 `data` 的数据类型，默认为 string
- `options` {Object} 密钥配置 [options](#options)
- `return` {Object} key
  - `keyPair` 密钥对对象。可以通过`$crypto.generateKeyPair`函数生成，或通过构造函数构造。
  - `data` 是 Key 的二进制数据。

构造函数，构造一个 Key 对象。

```js
let key = new $crypto.Key("测试");
log({ key });
```

## $crypto.generateKeyPair(algorithm, [length])

- `algorithm` {string} 加密算法，可选值有：
  - `DH`
  - `DSA`
  - `EC`
  - `RSA`
- `length` {number} 密钥长度。和算法相关，例如以位数指定的模数长度。默认为 256。
- `return` {Object}
  - `privateKey` 私钥
  - `publicKey` 公钥

生成一对密钥，包括公钥和私钥。
例如在 RSA 加密算法中，我们可以用私钥加密，公钥解密做签名；
或者公钥加密，私钥解密做数据加密。

```js
// 明文
let message = "未加密字符串";

// 生成RSA密钥
let keyPair = $crypto.generateKeyPair("RSA");
log("密钥对: ", keyPair);

// 使用私钥加密
let rsa = $crypto.encrypt(message, keyPair.privateKey, "RSA/ECB/PKCS1padding");
log("RSA私钥加密后二进制数据: ", rsa);

// 使用公钥解密
log(
  "RSA公钥解密: ",
  $crypto.decrypt(rsa, keyPair.publicKey, "RSA/ECB/PKCS1padding", {
    output: "string",
  })
);
```

## $crypto.digest(message, algorithm[, options])

- `data` {any} 需要进行消息摘要的消息
- `algorithm` {string} 消息摘要算法，包括：
  - `MD5`
  - `SHA-1`
  - `SHA-224`
  - `SHA-256`
  - `SHA-384`
- `SHA-512` 具体可参阅 MessageDigest
- `options` {Object} 用于指定输入与输出的类型与格式 [options](#options)
- `return` {any} 根据 `options` 指定的输出类型返回不同数据

对数据 `data` 用算法 `algorithm` 计算消息摘要。
数据 `data` 可以是文件、二进制、base64、hex、字符串等数据，
解密后数据可以返回二进制、base64、hex、字符串或者直接写入到文件中，具体参见输入与输出的类型与格式。

```js
// 字符串消息摘要
let message = "Hello, Autox.js";
log("字符串: ", message);
//输出md5算法的hex值
log("MD5: ", $crypto.digest(message, "MD5"));
//输出base64
log("MD5 [base64]: ", $crypto.digest(message, "MD5", { output: "base64" }));
let file = "/sdcard/脚本/_test_for_message_digest.js";
files.write(file, message);
log("文件: ", file);
//从文件读取数据进行摘要
log("MD5: ", $crypto.digest(file, "MD5", { input: "file" }));
```

## $crypto.encrypt(data, key, algorithm[, options])

- `data` {any} 明文消息，根据 `options.input` 指定的输入类型为不同格式的参数
- `key` {Key} 加密密钥。对称加密算法使用单个密钥，非对称加密则需要生成密钥对，参见 Key
- `algorithm` {string} 加密算法，包括：
  - `AES`
  - `AES/ECB/NoPadding`
  - `AES/ECB/PKCS5Padding`
  - `AES/CBC/NoPadding`
  - `AES/CBC/PKCS5Padding`
  - `AES/CFB/NoPadding`
  - `AES/CFB/PKCS5Padding`
  - `AES/CTR/NoPadding`
  - `AES/CTR/PKCS5Padding`
  - `AES/OFB/PKCS5Padding`
  - `RSA/ECB/PKCS1Padding`
  - `RSA/ECB/NoPadding`
  - `...` 具体可参阅 [javax.crypto.Cipher](https://developer.android.google.cn/reference/javax/crypto/Cipher?hl=en)
- `options` {Object} 用于指定输入与输出的类型与格式 [options](#options)
- `return` {any} 根据[options](#options) 指定的输出类型返回不同数据

使用密钥 `key` 对数据 `data` 用加密算法 `algorithm` 进行加密，
数据 `data` 可以是文件、二进制、base64、hex、字符串等数据，加密后数据可以返回二进制、base64、hex、字符串或者直接写入到文件中，具体参见输入与输出的类型与格式。

## $crypto.decrypt(data, key, algorithm[, options])

参考 `$crypto.encrypt`

对数据进行解密

### options

- `options` {object} 用于指定加解密、消息摘要时输入和输出的类型与格式。

  - `input` {string} 输入类型，若输入字符串，默认为 `string`；否则认为 `bytes`。可选的值包括：

    - `string` 字符串格式的数据
    - `base64` base64 格式的数据
    - `hex` base16 格式的数据
    - `bytes` Java 二进制字节数组
    - `file` 文件类型，将参数作为路径,从文件读取数据进行加解密

  - `output` {string} 输出类型，用于指定加密、解密、摘要后的数据的类型。
    对于加解密，默认为 `bytes`；对于消息摘要，默认为 `hex`。可选的值包括：

    - `string` 字符串格式的数据
    - `base64` base64 格式的数据
    - `hex` base16 格式的数据
    - `bytes` Java 二进制字节数组
    - `file` 文件类型，将处理后的数据写入到文件中，必须同时制定 dest 参数

  - `dest` {string} 输出文件路径，`output` 类型为 file 时，用于指定加密、解密、摘要后输出文件的路径

  - `encoding` {string} 编码格式，`input` 类型为 string 时，用于指定输入字符串转为二进制数据所使用的字符编码；`output` 类型为 string 时，用于指定输出数据转为字符串数据所使用的字符编码。默认为 utf-8
