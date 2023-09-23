---
description: RareBox开发者接入指南
permalink: /rareboxdeveloper/
---
# RareBox开发者接入指南
## 0.提醒
点击上面的目录查看对应编程语言接入教程！

如果不包含您使用的编程语言或代码有误请[联系我](/lianxi)。

如果你想添砖加瓦也欢迎联系我！

以下代码均可自行随意修改，以Java代码为准。

以下代码的功能均为调用RareBox安装应用。

根据具体设备不同，行为有所差异，具体请看下一节。

## 1.行为差异

本代码可以支持为以下手表安装安装包。

* 已经打开ADB WLAN的Android系统手表
* WearOS2.0+系统手表
* 部分华为手表
* 其他类型支持adb调试的电子设备

在其他手表上可能无法安装，如果无法安装请引导用户使用其他方式安装。

## 2.代码接入
### Java接入（推荐）
在你的代码中调用以下函数(Java)就能安装应用了！
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
### Kotlin接入
以下代码由ChatGPT转换自Java代码，如无法使用请反馈。
```kotlin

fun InstallByRareBox(context: Activity, filepath: String) {
    context.runOnUiThread {
val cm = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
val mClipData = ClipData.newPlainText("Label", filepath)
cm.setPrimaryClip(mClipData)
Toast.makeText(context, "已将文件路径复制到剪贴板，请在RareBox中安装！", Toast.LENGTH_LONG).show()
val packageManager = context.packageManager
val it = packageManager.getLaunchIntentForPackage("com.yuanwow.adb")
if (it?.resolveActivity(context.packageManager) != null) {
    context.startActivity(it)
} else {
    AlertDialog.Builder(context)
        .setTitle("警告")
        .setMessage("您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu")
        .create()
        .show()
}
    }
}
```
### AndroLua/FusionApp系编程环境
以下代码支持：AndLua/AndroLuaX/AndroLua/AideLua/FusionApp1/Fusion App2/Lua代码手册/...

其他AndroLua/FusionApp系编程环境大概率也是支持的，烦请自己试试！

请自己导入分析一下（主流环境都包含此功能）

```lua
function InstallByRareBox(context, filepath)
    context:runOnUiThread(function()
local cm = context:getSystemService(Context.CLIPBOARD_SERVICE)
local mClipData = ClipData.newPlainText("Label", filepath)
cm:setPrimaryClip(mClipData)
Toast.makeText(context, "已将文件路径复制到剪贴板，请在RareBox中安装！", Toast.LENGTH_LONG):show()

local packageManager = context:getPackageManager()
local it = packageManager:getLaunchIntentForPackage("com.yuanwow.adb")
if (it:resolveActivity(context:getPackageManager()) ~= nil) then
    context:startActivity(it)
else
    AlertDialog.Builder(context)
        :setTitle("警告")
        :setMessage("您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu")
        :create()
        :show()
end
end)
end
```

### iApp/裕语言
自己建一个mjava文件，把下面代码复制进去（自己import一下包）
```java
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
### DCloud的HBuilder/HBuilderX/Uni-app开发环境
代码未经测试，如有问题请反馈

```js
import clipboard from '@system.clipboard'
import prompt from '@system.prompt'
import router from '@system.router'

clipboard.set({
  text: filepath,
  success: function() {
    prompt.showToast({
      message: '已将文件路径复制到剪贴板，请在RareBox中安装！',
      duration: 1500
    })
    
    router.push({
      uri: 'app-launch://com.yuanwow.adb',
      success: function() {
        // Navigate to the desired package if available
      },
      fail: function() {
        prompt.showDialog({
          title: "警告",
          message: "您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu",
          buttons: [
            {
              text: "确定",
              color: "#000000"
            }
          ]
        })
      }
    })
  },
  fail: function() {
    prompt.showToast({
      message: '无法复制到剪贴板',
      duration: 1500
    })
  }
})
```
### Flutter/Dart代码

```dart
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

void installByRareBox(BuildContext context, String filepath) {
  Clipboard.setData(ClipboardData(text: filepath));
  Toast.show("已将文件路径复制到剪贴板，请在RareBox中安装！", context, duration: Toast.LENGTH_LONG);

  const package = 'com.yuanwow.adb';
  canLaunch(package).then((isInstalled) {
    if (isInstalled) {
      launch(package);
    } else {
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('警告'),
          content: Text('您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu'),
        ),
      );
    }
  });
}
```

### 纯NDK/c++代码

首先，在您的Android项目中创建一个名为native-lib.cpp的新文件：

```cpp
#include <jni.h>
#include <string>
#include <android/clipboard.h>
#include <android/log.h>

extern "C" JNIEXPORT void JNICALL
Java_com_example_yourpackage_InstallByRareBox(JNIEnv *env, jobject thiz, jobject activity, jstring filepath) {
    jclass contextClass = env->FindClass("android/content/Context");
    jclass clipboardManagerClass = env->FindClass("android/content/ClipboardManager");
    jclass clipDataClass = env->FindClass("android/content/ClipData");
    jclass toastClass = env->FindClass("android/widget/Toast");
    jclass packageManagerClass = env->FindClass("android/content/pm/PackageManager");
    jclass intentClass = env->FindClass("android/content/Intent");
    jclass alertDialogClass = env->FindClass("android/app/AlertDialog");

    // Get the method IDs
    jmethodID getSystemServiceMethod = env->GetMethodID(contextClass, "getSystemService", "(Ljava/lang/String;)Ljava/lang/Object;");
    jmethodID setPrimaryClipMethod = env->GetMethodID(clipboardManagerClass, "setPrimaryClip", "(Landroid/content/ClipData;)V");
    jmethodID newPlainTextMethod = env->GetStaticMethodID(clipDataClass, "newPlainText", "(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Landroid/content/ClipData;");
    jmethodID makeTextMethod = env->GetStaticMethodID(toastClass, "makeText", "(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;");
    jmethodID showMethod = env->GetMethodID(toastClass, "show", "()V");
    jmethodID getLaunchIntentForPackageMethod = env->GetMethodID(packageManagerClass, "getLaunchIntentForPackage", "(Ljava/lang/String;)Landroid/content/Intent;");
    jmethodID resolveActivityMethod = env->GetMethodID(intentClass, "resolveActivity", "(Landroid/content/pm/PackageManager;)Landroid/content/ComponentName;");
    jmethodID startActivityMethod = env->GetMethodID(contextClass, "startActivity", "(Landroid/content/Intent;)V");
    jmethodID createShowMethod = env->GetMethodID(alertDialogClass, "show", "()V");

    // Get the method parameter values
    jstring label = env->NewStringUTF("Label");
    jstring packageName = env->NewStringUTF("com.yuanwow.adb");
    jstring title = env->NewStringUTF("警告");
    jstring message = env->NewStringUTF("您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu");

    // Get the ClipboardManager service
    jobject clipboardManager = env->CallObjectMethod(activity, getSystemServiceMethod, env->NewStringUTF("clipboard"));

    // Store the filepath in the clipboard
    jobject clipData = env->CallStaticObjectMethod(clipDataClass, newPlainTextMethod, label, filepath);
    env->CallVoidMethod(clipboardManager, setPrimaryClipMethod, clipData);

    // Show a toast message
    jobject toast = env->CallStaticObjectMethod(toastClass, makeTextMethod, activity, env->NewStringUTF("已将文件路径复制到剪贴板，请在RareBox中安装！"), 1);
    env->CallVoidMethod(toast, showMethod);

    // Get the PackageManager and Intent for RareBox
    jobject packageManager = env->CallObjectMethod(activity, getSystemServiceMethod, env->NewStringUTF("package"));
    jobject intent = env->CallObjectMethod(packageManager, getLaunchIntentForPackageMethod, packageName);

    // Start the RareBox activity if it exists, otherwise show an AlertDialog
    jobject componentName = env->CallObjectMethod(intent, resolveActivityMethod, packageManager);
    if (componentName != nullptr) {
        env->CallVoidMethod(activity, startActivityMethod, intent);
    } else {
        jobject alertDialog = env->CallObjectMethod(
                env->NewObject(alertDialogClass, env->GetMethodID(alertDialogClass, "<init>", "(Landroid/content/Context;)V"), activity),
                env->GetMethodID(alertDialogClass, "setTitle", "(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;"),
                title
        );
        env->CallObjectMethod(
                env->CallObjectMethod(alertDialog, env->GetMethodID(alertDialogClass, "setMessage", "(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;"), message),
                createShowMethod
        );
    }

    // Clean up local references
    env->DeleteLocalRef(label);
    env->DeleteLocalRef(packageName);
    env->DeleteLocalRef(title);
    env->DeleteLocalRef(message);
    env->DeleteLocalRef(contextClass);
    env->DeleteLocalRef(clipboardManagerClass);
    env->DeleteLocalRef(clipDataClass);
    env->DeleteLocalRef(toastClass);
    env->DeleteLocalRef(packageManagerClass);
    env->DeleteLocalRef(intentClass);
    env->DeleteLocalRef(alertDialogClass);
}
```

然后，您需要在Android项目的CMakeLists.txt文件中添加以下内容：

```cmake
# Add the implementation of JNI functions
add_library(native-lib SHARED native-lib.cpp)

# Specify the native library dependencies, such as NDK libraries
target_link_libraries(native-lib
    log)
```

请注意，上述代码中的"com.example.yourpackage"应替换为您包名的实际值。

这只是一个简单的示例，实际情况会依赖您的项目结构和需求。您还需要配置NDK和CMake以正确构建和集成NDK代码。
### AutoJs/AutoJs+/AutoJsX
以下代码未经检验，仅供参考。

```javascript
function installByRareBox(context, filepath) {
    context.runOnUiThread(new java.lang.Runnable({
        run: function() {
            var cm = context.getSystemService(Context.CLIPBOARD_SERVICE);
            var mClipData = ClipData.newPlainText("Label", filepath);
            cm.setPrimaryClip(mClipData);
            toast("已将文件路径复制到剪贴板，请在RareBox中安装！", Toast.LENGTH_LONG);
            
            var packageManager = context.getPackageManager();
            var it = packageManager.getLaunchIntentForPackage("com.yuanwow.adb");
            if (it.resolveActivity(context.getPackageManager()) != null) {
                context.startActivity(it);
            } else {
                dialogs.build({
                    title: "警告",
                    content: "您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu"
                }).show();
            }
        }
    }));
}
```

### App Inventor2

App Inventor使用图形编程方式，以下是示例流程，请根据需要修改：

```plaintext
1. 创建如下组件：
- Button（按钮）
- Copy（复制）
- Notifier（提示器）
- Activity Starter（启动器）

2. 当按钮被点击时，设置以下代码块：
- Button -> Click event（点击事件）：
    - Copy -> Copy Text（复制文本）：filepath
    - Notifier -> Show Message（显示消息）：已将文件路径复制到剪贴板，请在RareBox中安装！
    - Activity Starter -> Activity Package Name（应用包名）：com.yuanwow.adb
    - Activity Starter -> Start Activity（启动应用）
    - Activity Starter -> ErrorOccurred event（错误事件）：
        - Notifier -> Show Alert（显示警告）：您的手表未安装RareBox，请前往Rare计划官网获得帮助：rare.genouka.rr.nu
```
