# Mod Installation Guide

This page explains how to install the Engage Fates and covers common issues.

---

## 1. Requirements

- **Ryujinx Emulator**
  - Game: *Fire Emblem Engage*
  - Version: **v2.0.0**
  - Make sure the base game runs correctly in Ryujinx before installing the mod.

---

## 2. Dependencies

- **Cobalt**
  - Recommended version: **v1.25.4 or later**
  - This mod is built on the Cobalt framework. Older versions may cause crashes or missing features.


### Installing Cobalt

1. Download the **Cobalt release package**.
2. Extract the archive.
3. **Drag all contents of the release package directly to the SD card root**.

No additional configuration is required.

---

## 3. Mod Files and Installation Path

The mod consists of **two required components**:

1. **IF mod (Cobalt)**  
   - Main mod files

2. **IFmodSoundBank**  
   - Music and sound resources

### Installation Path

Both folders must be placed **together** in the following directory:
sd:/engage/mods/  
├─ IF mod (Cobalt)/  
└─ IFmodSoundBank/  
---

## 4. Common Issues & Notes

### 1. Errors on startup / Plugin panic

Please check the following:

- The mod is installed in the **correct directory**
- Folder names have **not been changed**
- **IFmodSoundBank** is present

⚠️ **Important**  
Do **not** modify any files inside `IF mod (Cobalt)`.  
The plugin performs an **integrity check** at startup, and any changes may cause the mod to fail.

---

### 2. Compatibility with other mods

- Using this mod together with **romfs-modifying mods is not recommended**
- If additional plugins are required:
  - Place them in **separate folders**
  - Do **not** merge them into `IF mod (Cobalt)`

---

### 3. Running on real hardware (Nintendo Switch)

- The Nintendo Switch does **not allow non-ASCII characters** in file paths
- When installing on real hardware:
  - A **special converter tool** is required
  - Convert all paths to **English letters and numbers only**

Otherwise, the system will not recognize the mod.

---

If problems persist, please re-check the installation path and dependency versions.

---

## 5. Archive Format Requirement

- This mod **must be extracted before use**
- Do **not** place `.zip`, `.7z`, or other archive files directly into the `mods` directory

While some mods may still work when kept in an archived format, **IF Mod (Cobalt) does not support running from compressed archives**.

Please make sure the mod is **fully extracted** before installation, and that the directory structure looks like this:
sd:/engage/mods/  
├─ IF mod (Cobalt)/  
└─ IFmodSoundBank/  