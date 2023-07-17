---
description: RareBox常见问题解答
permalink: /rareboxproblem/
---
以下是常见的问题。
## 为什么用不了？
**先打开adb调试和WLAN调试功能。**
然后如果还不行请往下看。
## 如何打开ADB调试和WLAN调试功能？
[点击链接查看教程。](https://help.wearosbox.com/connect/connect.html)
## 提示No Route To Host怎么办
请自行排查连接的问题。

可能是您打开了 IP 隔离，或重启手机、手表和路由器后再试。

您也可以创建无线热点并连接手表。

**另外，部分学校的网络做了校园网认证和/或AP隔离，这样的网络无法进行WLAN调试！请自寻靠谱网络解决！**

## 如何安装apks（多重apk）
重命名.apks为.zip，解压缩，然后把里面的apk依次全部安装就行了。
## 远程连接时一直连接不上/手表总是掉线

根据 WearOS 系统连接规则：
> 启用 WLAN 后，您的手表会根据下列情况自动开启或关闭 WLAN，以节省电量：
> * 应用需要使用 WLAN 时
> * **省电模式已开启时**
> * 手表充电时
> * 手表更新时
> * **手表不在手机附近时**
> * 手表无法连接到 WLAN 时
> * 其他情形

您的手表会优先使用蓝牙而不是 WLAN，而RareBox将无法工作。
请在使用RareBox时，**关闭手表的省电模式，并且关闭手机和手表的蓝牙功能**，以稳定 WLAN 连接。

## Android表怎么连接
电脑连接手表，执行以下adb命令
对于Windows系统的命令提示符等请使用
```bash
adb tcpip 5555
```
对于Windows系统的PowerShell、类Unix/Linux系统等请使用
```bash
./adb tcpip 5555
```
然后就可以在RareBox里面通过`<ip地址>:5555`连接即可。
