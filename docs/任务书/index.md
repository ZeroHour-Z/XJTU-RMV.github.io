# 任务书

任务书是任务书。

目前打算讲一下 Ubuntu 的安装。

## Pre.准备型任务

由于视觉组的任务主要涉及在Ubuntu(当前为20.04LTS版本)系统使用C++/Opencv进行开发，因此当前任务聚焦于对开发环境的准备。

### Ubuntu系统的安装

  在自身电脑硬盘空间比较大或者拥有拓展硬盘位置的情况下，推荐按照网上的教程直接安装Ubuntu20.04；
  若电脑空间较少或者缺乏可拓展性，可以考虑安装WSL2,但WSL2无法连接外置的摄像头，仅能作为学习和代码修改用。(https://blog.csdn.net/weixin_45027467/article/details/106862520)

### 开发工具包的安装

1. MVS，可以前往[HIKROBOT官网](https://www.hikrobotics.com/cn/machinevision/service/download?module=0)找到Linux版本的MVS进行下载，之后解压压缩包，运行压缩包中的setup.sh即可。
   ```bash
   # geek一点的也可以wget下载喵
   wget https://www.hikrobotics.com/cn2/source/support/software/MvCamCtrlSDK_STD_V4.4.0_240629.zip
   ```
2. glog，`sudo apt-get install libgoogle-glog-dev`。
3. Eigen3，`sudo apt-get install libeigen3-dev`。
4. ceres，通过 `sudo apt-get install`确保已经下载依赖 `libgoogle-glog-dev`、`libgflags-dev`、`libatlas-base-dev`、`libeigen3-dev`、`libsuitesparse-dev`，之后前往github中[ceres主页](https://github.com/ceres-solver/ceres-solver/tags)下载ceres1.14，使用cmake编译的方式安装。
5. openvino，下载[官方密钥](https://apt.repos.intel.com/openvino/2021/GPG-PUB-KEY-INTEL-OPENVINO-2021)，之后依次输入以下指令 `sudo apt-key add <PATH_TO_DOWNLOADED_GPG_KEY>`，`echo "deb https://apt.repos.intel.com/openvino/2021 all main" | sudo tee /etc/apt/sources.list.d/intel-openvino-2021.list`，`sudo apt update`、`sudo apt install intel-openvino-runtime-ubuntu20-2021.4.752`，其中可能在echo这一步骤出错，导致update无法进行，则删除list文件之后使用 `gedit`或者 `vim`指令手动创建，然后输入echo的内容。
6. opencv，使用openvino自带的opencv。为了播放视频，需要安装依赖：`sudo apt-get install gstreamer1.0-liba`

### 认识与使用Linux
