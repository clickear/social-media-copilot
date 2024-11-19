
# 社媒助手

社媒助手是一款在各个社媒平台提供各种辅助功能的浏览器插件，可运行在**Chrome**、**Edge**等所有基于**Chromium**内核开发的浏览器

支持的平台和功能会陆续增加完善，如果本项目对你有帮助，请**star**支持一下！

## 功能列表

|   平台   | 无水印视频/图片下载 | 采集指定作品的数据 | 采集指定作品的评论 | 采集指定创作者的数据 | 采集指定创作者的作品 |
| :------: | :-----------------: | :----------------: | :----------------: | :------------------: | :------------------: |
|  小红书  |          ✅          |         ✅          |         ✅          |          ✅           |          ✅           |
|   抖音   |          ✅          |         ✅          |         ✅          |          ✅           |          ✅           |
|   快手   |          ❌          |         ❌          |         ❌          |          ❌           |          ❌           |
| 哔哩哔哩 |          ❌          |         ❌          |         ❌          |          ❌           |          ❌           |
|   微博   |          ❌          |         ❌          |         ❌          |          ❌           |          ❌           |
|   贴吧   |          ❌          |         ❌          |         ❌          |          ❌           |          ❌           |
|   知乎   |          ❌          |         ❌          |         ❌          |          ❌           |          ❌           |

## 使用教程

|  对于电脑小白或者不需要进行二次开发的同学，可以直接使用此方式进行一键安装使用

- **Chrome**：<https://chrome.google.com/webstore/detail/dbichmdlbjdeplpkhcejgkakobjbjalc>
- **Edge**：<https://microsoftedge.microsoft.com/addons/detail/gneijakmdhgakglgogbpldbjhbeddibj>
- **其他浏览器**：下载最新版的[social-media-copilot.crx](https://github.com/iszhouhua/social-media-copilot/releases/latest/download/social-media-copilot.crx)或[social-media-copilot.zip](https://github.com/iszhouhua/social-media-copilot/releases/latest/download/social-media-copilot.zip)文件，手动加载到浏览器中

### 具体功能介绍

- [小红书](docs/小红书.md)

- [抖音](docs/抖音.md)

## 二次开发

项目运行需要`NodeJS`，请自行安装运行环境。

> 推荐使用pnpm，也可使用其他依赖管理工具，如：npm、yarn、cnpm等

```bash
# 安装依赖
pnpm install
# 运行项目
pnpm dev
```

项目运行后会自动打开本机的Chrome浏览器，并自动加载插件代码。

项目核心框架为[WXT](https://github.com/wxt-dev/wxt)，具体说明见：[WXT文档](https://wxt.dev)

## 打赏

如果觉得项目不错的话可以打赏哦。您的支持就是我最大的动力！

[点击前往打赏](https://alms.iszhouhua.com)

## 交流群

### Telegram交流群

群组链接：[https://t.me/SocialMediaCopilot](https://t.me/SocialMediaCopilot)

### QQ交流群

<img width="400px" src="https://smc.iszhouhua.com/image/qq-group-qr-code.jpg" />

### 微信交流群

<img width="400px" src="https://smc.iszhouhua.com/image/wechat-group-qr-code.jpg" />

> 如二维码已失效，可加作者微信。记得备注来意

<img width="400px" src="https://smc.iszhouhua.com/image/wechat-qr-code.jpg" />

## 常见问题

### 数据采集原理

社媒助手采集数据是通过直接调用平台API接口，拿到数据后进行汇总下载/导出。
受各平台风控影响，频繁使用插件进行数据采集，可能会被平台限制。可尝试通过重新登录、切换账号等方式以继续使用。

## 免责声明

本项目仅供学习和研究目的，不得用于任何商业活动。用户在使用本项目时应遵守所在地区的法律法规，对于违法使用所导致的后果，本项目及作者不承担任何责任。 本项目可能存在未知的缺陷和风险（包括但不限于设备损坏和账号封禁等），使用者应自行承担使用本项目所产生的所有风险及责任。 作者不保证本项目的准确性、完整性、及时性、可靠性，也不承担任何因使用本项目而产生的任何损失或损害责任。 使用本项目即表示您已阅读并同意本免责声明的全部内容。

本项目的知识产权归开发者所有。本项目受到著作权法和国际著作权条约以及其他知识产权法律和条约的保护。用户在遵守本声明及相关法律法规的前提下，可以下载和使用本项目。

关于本项目的最终解释权归开发者所有。开发者保留随时更改或更新本免责声明的权利。

## 版本更新记录

### v0.0.5

- 小红书平台支持导出live图
- 抖音平台支持导出视频合集

### v0.0.4

- 修复因为权限问题导致部分功能不可用的问题
- 新增抖音根据达人导出视频时可选择导出的素材

### v0.0.3

- 修复小红书笔记导出功能失效的问题

### v0.0.2

- 支持小红书和抖音平台一键跳转到商业平台
- 支持小红书和抖音平台根据创作者ID或链接导出创作者信息和作品数据
- 在小红书和抖音平台的博主/达人详情页植入便捷操作

### v0.0.1

- 支持小红书平台笔记素材下载，文案复制，评论导出，批量笔记数据导出
- 支持抖音平台视频素材下载，评论导出，批量视频数据导出
- 在小红书和抖音平台的笔记/视频详情页植入便捷操作
