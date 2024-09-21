# 使用 C++ 和 OpenCV 进行图像处理

## 任务说明

本任务旨在培养组员在 Ubuntu 环境下使用 C++ 配合 OpenCV 库进行基础图像处理的能力。通过完成本任务，组员将掌握配置开发环境、安装 OpenCV 库、组织项目结构以及实现基本的图像处理操作的技能。

## 任务目标

- **配置 C++ 开发环境**：在 Ubuntu 系统中安装必要的编译器和开发工具。
- **安装 OpenCV 库**：利用 APT 或者使用编译安装的方式安装 OpenCV 的 C++ 版本。
- **组织项目结构**：设计合理的项目目录结构，包含源代码、构建文件及资源文件。
- **实现基础图像处理操作**：编写 C++ 程序完成图像处理的操作。
- **项目构建与运行**：使用 CMake 配置项目，编译并运行程序，验证功能实现。
- **提交任务源代码以及 README**：自行创建仓库并上传到 Github，将 Github 链接发送至 axihelloworld@gmail.com。

## 任务要求

### 环境配置

按照以下命令行或者使用编译安装来安装 OpenCV。

```bash
sudo apt update
sudo apt install libgtk2.0-dev pkg-config
sudo apt install libopencv-dev
```

### 项目结构

请按照以下的规定来组织项目结构

#### 构筑项目结构

通过 `mkdir opencv_project` 创建项目的根目录，并且在其中建立以下的项目结构：

```
opencv_project/
├── CMakeLists.txt
├── src/
│   └── main.cpp
├── README.md
├── resources/
│   └── test_image.png
└── build/
```

#### 获取测试图片

在 `opencv_project` 中使用以下命令下载指定的测试图片至 `resources/` 目录：

```bash
mkdir resources
wget -O resources/test_image.png https://pic.axi404.top/95075810_p0.4ckucuqdh8.png
```

### 核心实现

组员在本任务中需要满足一下的两项实现任务，一为创建并编写 `CMakeList.txt`，其中内容在下方给出；二为开发主程序。与此同时，与第一次任务一致，组员仍需提交 README 文件对内容进行说明。

#### CMakeLists.txt 编写
   
编写 `CMakeLists.txt` 文件以配置项目构建，确保正确链接 OpenCV 库。示例如下：

```cmake
cmake_minimum_required(VERSION 3.10)
project(OpenCV_Project)

find_package(OpenCV REQUIRED)
include_directories(${OpenCV_INCLUDE_DIRS})

add_executable(OpenCV_Project src/main.cpp)
target_link_libraries(OpenCV_Project ${OpenCV_LIBS})
```

#### 主程序开发

在 `src/main.cpp` 中实现基础图像处理操作，需要对于任务给定的图片进行以下操作：

- 图像颜色空间转换
  - 转化为灰度图
  - 转化为 HSV 图片
- 应用各种滤波操作
  - 应用均值滤波
  - 应用高斯滤波
- 特征提取
  - 提取红色颜色区域
    - HSV 方法
  - 寻找图像中红色的外轮廓
  - 寻找图像中红色的 bounding box
  - 计算轮廓的面积
  - 提取高亮颜色区域并进行图形学处理
    - 灰度化
    - 二值化
    - 膨胀
    - 腐蚀
    - 对处理后的图像进行漫水处理
- 图像绘制
  - 绘制任意圆形方形和文字
  - 绘制红色的外轮廓
  - 绘制红色的 bounding box
- 对图像进行处理
  - 图像旋转 35 度。
  - 图像裁剪为原图的左上角 1/4。

:::tip 提示
程序应生成处理后的图像文件并保存。代码需结构清晰，添加**适当的注释**以提高可读性。
:::

#### 项目构建与运行

```bash
cd opencv_project/build
cmake ..
make -j
./OpenCV_Project
```

运行后，程序应生成处理后的图像文件，并在终端输出各轮廓的面积信息。

#### README 报告

本任务依然要求组员提交 README 报告，包括自己完成任务的思路，从何处寻找的资料，如向 GPT 寻求帮助，可以提供与 GPT 的聊天记录。

如有报错等内容，也请在 README 中说明。

本任务主要重点在于程序的编写，组员无需过于关注 README 的格式问题，但是请提交符合 Markdown 语法的易读的 README，这很重要。

## 提交内容

整体的 opencv_project 项目需提交至 Github，其中应包括，符合 `项目结构` 的内容，即至少包括以下内容：

1. **源代码**
2. **资源文件**：
   - `resources` 中的图像文件，原图与处理后的图像。
   - 程序运行时终端的输出截图。
3. **README.md**

## 评价标准

- **功能实现**：所有指定的图像处理操作均已正确实现并运行无误。
- **提交规范**：所有要求的提交内容均已齐全，并按照指定方式提交。
- **文档完整性**：提交的报告内容完整，能够清晰描述项目的实现过程和结果。
- **代码质量**：代码结构合理，注释清晰，变量命名规范。

## 参考资料

- [OpenCV 官方文档](https://docs.opencv.org/)
- [C++ 官方教程](https://www.cplusplus.com/doc/tutorial/)
- [CMake 官方文档](https://cmake.org/documentation/)
- [Ubuntu 软件包管理](https://help.ubuntu.com/community/AptGet/Howto)