# 压缩与解压

`zips` 模块提供了压缩和解压缩文件的功能，支持多种常见的压缩格式。

## zips.A(type, filePath, dirPath, [password])

将指定目录中的文件按照指定的格式压缩成文件后储存在指定的路径下。

- `type` {string} - 压缩类型，支持的格式包括：zip、7z、bz2、bzip2、tbz2、tbz、gz、gzip、tgz、tar、wim、swm、xz、txz。
- `filePath` {string} - 压缩包存储的路径名称。
- `dirPath` {string} - 需要压缩的目录完整路径名称。
- `password` {string} - 可选参数，压缩密码。
- `retrun` {number} - 压缩结果状态码

## zips.X(filePath, dirPath, [password])

解压指定的压缩文件包，并将解压后的文件储存在指定的目录下。

- `filePath` {string} - 压缩文件的完整路径名称，必须是以下支持的压缩格式之一：zip、7z、bz2、bzip2、tbz2、tbz、gz、gzip、tgz、tar、wim、swm、xz、txz、rar、chm、iso、msi。
- `dirPath` {string} - 解压后的文件存储的目录完整路径名称。
- `[password?]` {string} - 可选参数，压缩密码。
- `retrun` {number} - 解压缩结果状态码

### 状态码

| 状态码 |                                  返回值含义                                  |
| :----: | :--------------------------------------------------------------------------: |
|   0    |                    压缩/解压缩成功，文件已保存到指定路径                     |
|   1    | 压缩/解压缩结束，存在非致命错误（例如某些文件正在被使用，没有被压缩/解压缩） |
|   2    |                                   致命错误                                   |
|   7    |                                  命令行错误                                  |
|   8    |                                 没有足够内存                                 |
|  255   |                                 用户中止操作                                 |
|  其他  |                                   未知错误                                   |

