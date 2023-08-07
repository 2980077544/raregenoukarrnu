---
description: RareBox
permalink: /rarebox/
---
# RareBox

**你没有走错！这就是RareBox新版官方页面**

[不想听作者啰嗦，我要看下载链接/使用教程](#目前的下载和安装渠道)
RareBox是适用于很多穿戴设备调试的通用调试工具箱软件。

## 目前支持并适配的设备
* Android系统手表（部分手表仅能远程调试其他手表）
* WearOS系统手表（包括问问、小米等品牌在内大部分手表可以自我调试，所有手表都可以远程调试其他手表）
* 部分华为手表（部分可以自我调试，所有手表都可以远程调试其他手表）
* 其他类型支持adb调试的电子设备
* Android系统手机（都可以远程调试其他手表）
* 鸿蒙系统手机（都可以远程调试其他手表）

注：自我调试指的是可以直接安装到手表上使用。远程调试指的是可以通过在一台设备上安装调试另一台设备。

## 目前的下载和安装渠道
* 小问应用商店（问问品牌手表可以直接下载）
* **本官方网站**[跳转到本站下载](#本站下载)（请记住网址：rare.genouka.rr.nu或blog.genouka.rr.nu）
* 官方QQ群 652100205
* 官方QQ频道 https://pd.qq.com/s/6btddnc8n
* Bilibili: Genouka

**请不要从其他渠道下载本软件，由于本软件获取的权限较高，其他渠道下载的软件可能有病毒或者木马，由此引起的一切损失和责任一律与本开发者无关！！！**

## 软件的版权和费用问题
* 本软件完全由开发者所有并保留一切权利，向用户开放使用权。
* **本软件没有任何明示或潜在收费！！！遇到他人倒卖请口嗨他，经济纠纷与开发者无关！**

## 软件功能介绍
* 直接安装第三方应用（配合Rare浏览器下载应用，可以不用手机也能玩表！）
* 强大的命令终端
* 直接修改dpi
* 传输文件
* 调试其他手表，为其他手表安装应用等
* 更多功能欢迎探索

## 介绍视频

[欢迎来三连+关注，点击查看视频详情页](https://www.bilibili.com/video/BV1zk4y177Kg/)

## 本站下载

[2.6.0暑假版下载](http://mobvoi-search-public.mobvoi.com/mobvoi-apk/awch/com.yuanwow.adb_18_wear_all_715fb03eacddb11e9e25e120eca96b7a.apk)
最低API21
目标API26
774 kB
本版本于2023-7-18发布。

**以下为历史版本**

[2.5.1儿童节版下载](http://mobvoi-search-public.mobvoi.com/mobvoi-apk/awch/com.yuanwow.adb_17_wear_all_b1506c454d83bb0be13abb045d10b1cb.apk)
本版本于2023-6-3发布。

更早的版本不再提供。

## 开发者指南
在你的代码中调用以下函数就能安装应用了！
```java
    /**
     * 通过RareBox安装应用
     * @Param context 界面上下文，只能传入Activity的派生类。
     * @Param filepath 应用绝对路径(千万注意路径不要有空格)，示例："/sdcard/app.apk"
     * @Author Genouka
     * @Date 2023-08-07
     */
    public void InstallByRareBox(final Activity context,final String filepath){
        context.runOnUiThread(new Runnable(){
                @Override
                public void run() {
                    ClipboardManager cm = (ClipboardManager) context.getSystemService(Context.CLIPBOARD_SERVICE);
                    ClipData mClipData = ClipData.newPlainText("Label",filepath);
                    cm.setPrimaryClip(mClipData);
                    Toast.makeText(context,"已将文件路径复制到剪贴板，请在RareBox中安装！",Toast.LENGTH_LONG).show();
                    PackageManager packageManager = context.getPackageManager();
                    Intent it = packageManager.getLaunchIntentForPackage("com.yuanwow.adb");
                    if (it.resolveActivity(context.getPackageManager()) != null) {
                        context.startActivity(it);
                    }else{
                        new AlertDialog.Builder(context).setTitle("警告").setMessage("您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu").create().show();
                    }
                }
            });
    }
```
用kotlin或者其他语言的童鞋自己照着改吧！
## 教程

加入[QQ群/QQ频道](/lianxi)查看。

[点击查看常见问题解答](/rareboxproblem)

## 赞助

当然如果你愿意，可以打赏一点啦！


![微信赞赏码](http://i.imgloc.com/2023/03/18/LvZkF.png)

## 联系方式
[点击查看](/lianxi)