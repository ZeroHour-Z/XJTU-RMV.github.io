# Windows 安装 C++ 环境

:::tip

本指南不属于任务书考核范围，适用于有在 Windows 系统上使用 C++ 编程需求的读者。

:::


在 Windows 系统下安装 C++ 开发环境的主流方法有两种：

1. 安装 Visual Studio（VS）。VS 能自动下载编译器及相关文件。


2. 安装 Visual Studio Code（VSCode），并手动配置 C++ 编译器。

以下是两种安装方式的对比：

|                | Visual Studio | Visual Studio Code+ 编译器 |
| -------------- | ------------- | -------------------------- |
| 安装难度       | 简单          | 较难                       |
| 占用空间       | 大（>5GB）    | 中等（<2GB）               |
| 运行单文件     | 需创建项目    | 可直接运行                 |
| 运行多文件项目 | 支持          | 通过 make 或 cmake 支持    |

由于 Visual Studio 对单文件支持较差，本文将以 VSCode 配置 C++ 开发环境为例。

## 安装 Visual Studio Code

访问 [Visual Studio Code 官网](https://code.visualstudio.com)，下载 Windows 版安装包。运行安装程序时，建议保持默认设置，第三步勾选“将 Code 注册为受支持的文件类型的编辑器”和“添加到 PATH”。其他两项可以根据自己需要勾选。

![VSCode 安装步骤](https://pic.axi404.top/image.8hgfkemrvy.webp)

安装完成后，启动 VSCode，点击左侧的插件图标 ，搜索并安装 Chinese (Simplified) (简体中文) 语言包。

安装完成后，点击右下角的“Change Language and Restart”，重启软件。

![](https://pic.axi404.top/image.51e3sbdmqc.webp)

重启后，继续搜索并安装 C/C++ Extension Pack。

![](https://pic.axi404.top/image.m10r70kt.webp)

至此，VSCode 的基础配置已完成。

## 安装 MinGW 并设置环境变量

:::tip
使用 MinGW 是一种方法，在下方我们也提供了使用 MSYS2 的方法，两种方法仅选择其中一种即可。
:::

前往 [GitHub - niXman/mingw-builds-binaries: MinGW-W64 compiler binaries](https://github.com/niXman/mingw-builds-binaries)，点击右侧的 Releases 自动进入最新版本，选择文件列表中形如 `x86_64_xx.xx.x-release-posix-seh-ucrt-rt-vxx-` 的文件下载。或者，可以通过 [此链接](https://github.com/niXman/mingw-builds-binaries/releases/download/14.2.0-rt_v12-rev0/x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev0.7z) 直接开始下载。

>x86_64 代表 64 位，posix 代表此编译器版本与类 Unix 系统的兼容性较好（存在 pthread.h），ucrt 是一种调用方式

> 截至 2024 年 9 月 11 日，最新版本的文件名为 x86_64-14.2.0-release-posix-seh-ucrt-rt_v12-rev0.7z，其 SHA-256 为 0f1afc3b48f66dda68fbfb7b8b0f1d22b831396fbe1e3dea776745f32d930b24

:::tip

如果由于某种神秘的力量，读者无法下载此文件，可以尝试 gitcode 的镜像：[mingw-builds-binaries:MinGW-W64 compiler binaries - GitCode](https://gitcode.com/gh_mirrors/mi/mingw-builds-binaries/overview)。不过此镜像的文件版本比较陈旧

:::

下载完成后，解压文件，并将 mingw64 文件夹放置于无中文或空格的目录，建议直接放在 C 盘根目录。目录结构应如下所示：

![](https://pic.axi404.top/image.86tlr98f7g.webp)

进入目录下的 bin 文件夹，点击上方地址栏，复制当前文件夹地址。

![](https://pic.axi404.top/image.1024dxad8v.webp))

然后，在 Windows 任务栏左下角的搜索框输入“环境变量”，点击“编辑系统环境变量”，

![](https://pic.axi404.top/image.7sn60e0g41.webp)

打开对话框。点击右下角的“环境变量...”，进入新的对话框。

![](https://pic.axi404.top/image.969p4fbayd.webp))

在“**系统变量**”一栏中，**双击变量名为 Path 的一行**

![](https://pic.axi404.top/image.3d4qv4ocpy.webp)

在新的窗口中，点击右上角的新建，在新的一行中，粘贴刚刚复制的路径。最后点击“确定”关闭所有对话框。

![](https://pic.axi404.top/image.6f0mwcpsqz.webp)

## 编写第一个 C++ 程序

打开 VSCode，新建 .cpp 文件，并输入以下代码：

```c++
#include <iostream>
int main(){
    std::cout << "Hello world!" << std::endl;
    return 0;
}
```

然后，点击右上角的向下三角，选择 "Run C++ File"

![](https://pic.axi404.top/image.8dwtmovhhp.webp)

然后，从上方选择”g++.exe 生成和调试活动文件“

> 读者的列表数量可能与笔者不同，这是正常现象

![](https://pic.axi404.top/image.7egq9isucl.webp)

等待编译完成，程序就会自动执行了

## Windows 安装 MSYS2

使用 MSYS2 来配置 C++ 环境也是一种常见的选择，相较于 MinGW，MSYS2 的优势在于其包管理器 pacman，可以方便地安装各种库。

前往 [MSYS2 官网](https://www.msys2.org/)，点击下方的 Download，下载安装包。

![](https://pic.axi404.top/image.2donjcu2j6.webp)

作为参考，其版本 `msys2-x86_64-20240727.exe` 的 SHA256 为 `20D452E66CC95F975B2A8C5D814BA02E92481071580E80A3E3502A391FFF6D2A`。

安装时，建议选择 C 盘作为安装地点，新建一个空文件夹即可。

![](https://pic.axi404.top/image.32hx3dm52l.webp)

安装完成后，按照安装 MinGW 中所述的方法，将 `C:\msys64\ucrt64\bin` 加入环境变量。

打开 MSYS2 根目录下的 `ucrt64.exe`，在弹出的命令行窗口中，输入以下命令：

```shell
pacman -Syu
pacman -S mingw-w64-ucrt-x86_64-toolchain
pacman -S mingw-w64-ucrt-x86_64-clang
pacman -S mingw-w64-ucrt-x86_64-clang-tools-extra
pacman -S mingw-w64-ucrt-x86_64-cmake
```

然后 `Win + X` 选择终端，在终端中依次输入：

```shell
gcc     # 输出为 gcc.exe: fatal error: no input files
clangd  # 输出为 clangd is a language server that provides IDE-like features ......
cmake   # 输出为 Usage
        #       cmake [options] <path-to-source>
        #       cmake [options] <path-to-existing-build>
        #       cmake [options] -S <path-to-source> -B <path-to-build>
```

## 配置 VSCode 的 CMake Tools 插件

在 VSCode 的插件中选择安装 clangd/CMake/CMake Tools，注意，无需安装 C++ 插件，如果已经安装，可以选择禁用或者卸载。

在 VSCode 中选择新文件夹，然后通过 `ctrl + shift + P` 选择 `CMake: Quick Start`，之后依次进行：

- 输入自己的项目名称。
- 选择 `C++`。
- 选择 `Executable`。
- 在选择 CPack 等的界面和之后的保存预设界面，连点两次 `Esc`。

如有报错，先尝试重启 VSCode，之后可以在下方评论区反馈。

在 VSCode 左下角的齿轮与播放按钮分别代表编译以及编译并运行：

![](https://pic.axi404.top/image.1e8k67vge1.webp)

同时在 Windows 中此时也可以正常使用 CMake 的流程进行编译：

```shell
mkdir build
cd build
cmake ..
cmake --build .
```

## 扩展

如果读者需要运行单文件程序，也可以下载扩展 "Code Runner"，点击右上角下拉菜单中新增的选项”Code Runner“，可以快速运行 C++ 程序。