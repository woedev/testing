---
outline: false
head: [
    ['link', {rel: 'stylesheet', href: '/testing/cios/cios.css'}],
    ['script', {defer: '', src: '/testing/cios/d2xVersion.js'}]
]
---

# cIOS

<noscript>

::: danger
**Please enable JavaScript so that the cIOS version can be retrieved.**
:::

</noscript>

::::: tabs
:::: tab cIOS for Wii/Family Edition

::: details Technical Details (optional)
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.
:::

::: danger
Do not attempt to install a vWii/Wii mini IOS or System Menu on the Wii. Doing so will likely [brick](bricks#ios-brick) your console.
:::

## Requirements {#wii-requirements}

<div id="js-enabled">

* A Wii with the Homebrew Channel installed
* An SD card or USB drive
* The [d2x cIOS Installer](https://github.com/wiidev/d2x-cios/releases/download/d2x-v1-demo/d2x-v1-demo.zip) (click to download)

</div>
<noscript>

* A Wii with the Homebrew Channel installed
* An SD card or USB drive
* The [d2x cIOS Installer](https://github.com/wiidev/d2x-cios/releases/)

</noscript>

::: warning
If you're using an SD card, ensure the lock switch is in the unlocked position, otherwise you'll be unable to select the correct options in the installer.
:::

## IOS Downloads {#wii-downloads}

::: tip
You can skip this section and proceed to the [Installation](#wii-installation) section if your Wii has internet access.
:::

::: info
If you are on macOS or Linux, you may download & run [this script](/assets/files/d2x_offline_ios.zip), which will then download the WAD files for you.
:::

1. Insert your SD card or USB drive into your computer.
2. On your computer, download [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/latest/download/NUSD-Mod-NUS-Fix.zip).
3. Copy all files from the NUS Downloader `.zip` to a folder on your computer.
4. Run `NUS Downloader.exe`.
5. Navigate to `Database` > `IOS` > `IOS38`, then select `v4123`.
    + Ensure that "Pack WAD" is checked.
    + *Don't* check "Patch IOS". That is the cIOS Installer's job.
6. Click `Start NUS Download!`.
7. Repeat the above steps for `IOS56 v5661`, `IOS57 v5918` and `IOS58 v6175`.
8. When the process is complete, there will be a folder named `titles` in the same folder as the NUS Downloader.
9. Open the `titles` folder and navigate through them until you locate the four WAD files you downloaded.
10. Place each WAD file on the root of your SD card or USB drive.
    + This must be the same device containing the d2x cIOS Installer.

::: info
The WAD files should be on your SD card like this:

![](/images/cios/d2x_offline_ios.png)
:::

## Installation {#wii-installation}

1. Copy the `apps` folder within [d2x-v1-demo.zip](https://github.com/wiidev/d2x-cios/releases/download/d2x-v1-demo/d2x-v1-demo.zip) to the root of your SD card or USB drive.
2. Reinsert your SD card or USB drive into your console.
3. Power on your console.
4. Launch the Homebrew Channel.
5. Launch d2x cIOS Installer from the list of homebrew.
6. Change the settings to the following:

##### cIOS 248 (base 38) {#wii-cios248}

```
Select cIOS <d2x-v1-demo>
Select cIOS base <38>
Select cIOS slot <248>
Select cIOS revision <65535>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_248.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo&gt;</text>
</svg>
<div id="js-enabled">

::: info
If you're unable to select `d2x-v1-demo`, press `B` to exit the installer and then make sure your SD card is unlocked.
:::

</div>

::: info
The warning `The (c)IOS detected in slot ### will be overwritten` can be safely ignored.
:::

::: info
If you are seeing `Slot ### already used in batch settings` or `cIOS already added in batch with revision ##### and slot ###`, press `-` to disable batch mode.
:::
    
7. Press `A`. This will bring you to the slot map:

![](/images/cios/d2x_summary.png)
    
8. Press `A` again.

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_installation.png" />
    <text x="16" y="389" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">Installing d2x-v1-demo base 38 rev65535 into slot 248 (1/1)...</text>
</svg>
    
9. After the installation has finished, you will be brought back to the slot map. Ensure that the slot that was just installed is highlighted green.

![](/images/cios/d2x_log.png)

::: info
If the slot is highlighted red, try to install the cIOS again.

If you are getting an error before/during the downloading stages (e.g., `tcp_connect timeout`, `net_gethostbyname failed: ...`), press `B` to exit and continue from the [IOS Downloads](#wii-downloads) section.
:::

10. Press `A`. This will return you to the configuration screen.
11. Repeat the previous 5 steps with the following configurations:

##### cIOS 249 (base 56) {#wii-cios249}

```
Select cIOS <d2x-v1-demo>
Select cIOS base <56>
Select cIOS slot <249>
Select cIOS revision <65535>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_249.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo&gt;</text>
</svg>
<div id="hide-aside-entry">

##### cIOS 250 (base 57) {#wii-cios250}

</div>

```
Select cIOS <d2x-v1-demo>
Select cIOS base <57>
Select cIOS slot <250>
Select cIOS revision <65535>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_250.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo&gt;</text>
</svg>
<div id="hide-aside-entry">

##### cIOS 251 (base 58) {#wii-cios251}

</div>

```
Select cIOS <d2x-v1-demo>
Select cIOS base <58>
Select cIOS slot <251>
Select cIOS revision <65535>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_251.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo&gt;</text>
</svg>

12. Once you have installed the cIOS into the 4 slots, press `B` to return to the Homebrew Channel.

::: info
If you downloaded the 4 WAD files in the [IOS Downloads](#wii-downloads) section, you may now delete them from your SD card/USB drive.
:::

::: tip
[Continue to Open Shop Channel installation](osc)

Now that your Wii has adequate brick protection, you can install the Open Shop Channel, a trusted repository for homebrew that can be accessed both on and off the Wii.
:::

::::
:::: tab cIOS for vWii (Wii U)

::: details Technical Details (optional)
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.
:::

::: danger
Do not attempt to install a Wii/Wii mini IOS or System Menu on the vWii. Doing so will likely [brick](bricks#ios-brick) your console.
:::

## Requirements {#vwii-requirements}

<div id="js-enabled">

* A Wii U with the Homebrew Channel installed on the vWii
* An SD card or USB drive
* The [d2x cIOS Installer for vWii](https://github.com/wiidev/d2x-cios/releases/download/d2x-v1-demo/d2x-v1-demo-vWii.zip) (click to download)

</div>
<noscript>

* A Wii U with the Homebrew Channel installed on the vWii
* An SD card or USB drive
* The [d2x cIOS Installer for vWii](https://github.com/wiidev/d2x-cios/releases/)

</noscript>

::: warning
If you're using an SD card, ensure the lock switch is in the unlocked position, otherwise you'll be unable to select the correct options in the installer.
:::

## Installation {#vwii-installation}

1. Copy the `apps` folder within [d2x-v1-demo-vWii.zip](https://github.com/wiidev/d2x-cios/releases/download/d2x-v1-demo/d2x-v1-demo-vWii.zip) to the root of your SD card or USB drive.
2. Reinsert your SD card or USB drive into your console.
3. Power on your console.
4. Launch the Homebrew Channel.
5. Launch d2x cIOS Installer from the list of homebrew.
6. Change the settings to the following:

##### cIOS 248 (base 38) {#vwii-cios248}

```
Select cIOS <d2x-v1-demo-vWii>
Select cIOS base <38>
Select cIOS slot <248>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_248_vwii.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo-vWii&gt;</text>
</svg>

<div id="js-enabled">

::: info
If you're unable to select `d2x-v1-demo-vWii`, press `B` to exit the installer and then make sure your SD card is unlocked.
:::

</div>

::: info
The warning `The (c)IOS detected in slot ### will be overwritten` can be safely ignored.
:::

7. Press `A` to install.

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_installation.png" />
    <text x="16" y="389" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">Installing d2x-v1-demo-vWii base 38 rev21011 into slot 248 (1/1)...</text>
</svg>

8. Press `A` to continue.
    
9. Repeat the previous 3 steps with the following configurations:

##### cIOS 249 (base 56) {#vwii-cios249}
    
```
Select cIOS <d2x-v1-demo-vWii>
Select cIOS base <56>
Select cIOS slot <249>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_249_vwii.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo-vWii&gt;</text>
</svg>

##### cIOS 250 (base 57) {#vwii-cios250}

```
Select cIOS <d2x-v1-demo-vWii>
Select cIOS base <57>
Select cIOS slot <250>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_250_vwii.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo-vWii&gt;</text>
</svg>

##### cIOS 251 (base 58) {#vwii-cios251}

```
Select cIOS <d2x-v1-demo-vWii>
Select cIOS base <58>
Select cIOS slot <251>
```

<svg class="cIOS-svg" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
    <image width="640" height="480" href="/images/cios/d2x_v11_251_vwii.png" />
    <text x="120" y="133" fill="#D3D3D3" font-size="16px" font-family="DOSVGA, monospace">&lt;d2x-v1-demo-vWii&gt;</text>
</svg>

10. Once you have installed the cIOS into the 4 slots, press `B` to return to the Homebrew Channel.

::: tip
[Continue to finalizing setup](vwii-finalizing-setup)
:::

::::
:::: tab cIOS for Wii mini

::: info
If you need help with anything regarding this tutorial, please join [the Wii mini Hacking Discord server](https://discord.gg/6ryxnkS) (recommended)
:::

::: details Technical Details (optional)
cIOS (Custom IOS) are IOS that are patched to allow custom functionality. While [cIOS](https://wiibrew.org/wiki/Custom_IOS) has largely been supplanted by AHBPROT, which gives complete hardware access, it still has useful applications. For example, this enables the functionality of USB loaders like USB Loader GX and WiiFlow, alongside other pieces of homebrew like SaveGame Manager GX. You can skip this process if you want, but generally it extends your Wii with little to no downsides.

This d2x cIOS installer was originally developed for the Wii U's vWii by DaveBaol and custom cIOS was created by Leseratte for the Wii mini. The original download page can be found [here](https://wii.leseratte10.de/d2xl-cIOS/). Leseratte's GitHub page can be found [here](https://github.com/Leseratte10/d2xl-cios). Please note that this cIOS is still experimental, though no problem with functionality has been reported.
:::

::: danger
Do not attempt to install a Wii/vWii IOS or System Menu on the Wii mini. Doing so will likely [brick](bricks#ios-brick) your console.
:::

## Requirements {#wii-mini-requirements}

* A Wii mini with the Homebrew Channel installed
* A USB drive
* The [d2xl cIOS Installer](/assets/files/d2xl-cios-installer-mini.zip) (click to download)

## Installation {#wii-mini-installation}

1. Insert your USB drive into your computer.
2. Copy the `apps` folder within [d2xl-cios-installer-mini.zip](https://woedev.github.io/testing/assets/files/d2xl-cios-installer-mini.zip) to the root of your USB drive.
3. Reinsert your USB drive into your console.
4. Power on your console.
5. Launch the Homebrew Channel.
6. Launch d2xl cIOS Installer from the list of homebrew.
7. Select `Continue`.
8. Change the settings to the following:

##### cIOS 249 (base 57) {#wii-mini-cios249}

```
Select cIOS <d2xl-v1-beta2>
Select cIOS base <57>
Select cIOS slot <249>
```

![](/images/cios/d2x_v1_249_mini_NTSC.png)
![](/images/cios/d2x_v1_249_mini_PAL.png)

::: info
Under notes, you will see an IOS version number ending in either `v31775` or `v31776`. `IOS57-64-v31775` is for NTSC (North American) consoles, while `IOS57-64-v31776` is for PAL (European) consoles. Make sure you are selecting the correct version number for your console.
:::

10. Press `A` to install.

::: info
If the install fails with a `TMD version mismatch` error, press left or right on the directional pad over the `Select cIOS base` option until the version number is different than the one you tried before. The number 57 will not change.
:::

11. Once you have installed the cIOS, press `B` to return to the Homebrew Channel.

::: tip
[Continue to finalizing setup](mini-finalizing-setup)
:::

::: tip
[Click here to go back to the site index.](site-navigation)
:::

::::
:::::
