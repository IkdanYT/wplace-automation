# 📋 Complete Guide - How to Use WPlace Bot

## 🚀 Complete Step-by-Step

### **1. Initial Setup**

#### **1.1 Open the Website**
1. Open your browser (Chrome, Firefox, Edge, etc.)
2. Go to: **https://wplace.live**
3. Wait for the site to load completely
4. Make sure the canvas (drawing area) is visible

#### **1.2 Open Developer Console**
- **Windows/Linux**: Press `F12` or `Ctrl + Shift + I`
- **Mac**: Press `Cmd + Option + I`
- **Alternative**: Right-click → "Inspect" → "Console" tab

### **2. Load the Bot (REQUIRED)**

#### **2.1 Paste the Main Code**
In the console, paste this code and press `Enter`:

```javascript
fetch('https://raw.githubusercontent.com/IkdanYT/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
```

**OR** paste the complete code from the `wplace-bot.js` file directly.

#### **2.2 Verify it Loaded**
After executing, you should see:
- ✅ Message: "🎨 WPlace Bot Loaded!"
- ✅ Control panel in the top right corner
- ✅ List of available commands in the console

---

## 🎨 **3. Choose Your Creation Method**

### **Method A: Pre-defined Images (Easiest)**

```javascript
// Load heart
wplaceBot.loadHeartImage();

// OR load smiley
wplaceBot.loadSmileyImage();

// Set position (where to start drawing)
wplaceBot.setStartPosition(100, 100);

// Set speed (delay between pixels in ms)
wplaceBot.setDelay(1000);

// Start drawing
wplaceBot.start();
```

### **Method B: Image Upload (Panel)**

1. **Click "📁 Load Image"** in the panel
2. **Select your image** (PNG, JPG, etc.)
3. **Configure position** in the X and Y fields
4. **Adjust delay** if necessary
5. **Click "▶️ Start"**

### **Method C: Advanced Converter**

1. **Click "🔧 Converter"** in the panel (opens new tab)
2. **Drag your image** or click to select
3. **Configure options**:
   - Maximum size
   - Color mode (recommended: Limited Palette)
   - Initial position
   - Delay
4. **Click "🔄 Convert Image"**
5. **Click "📝 Generate Script"**
6. **Copy the generated code**
7. **Return to wplace.live**
8. **Paste the code in the console**

### **Method D: Pixel Art Editor**

1. **Click "🎨 Editor"** in the panel (opens new tab)
2. **Draw directly** on the canvas using the tools
3. **Configure options** in the right sidebar
4. **Copy the automatically generated script**
5. **Return to wplace.live**
6. **Paste the code in the console**

---

## ⚙️ **4. Important Settings**

### **4.1 Initial Position**
```javascript
// Define where to start drawing (X, Y)
wplaceBot.setStartPosition(100, 100);
```

### **4.2 Speed/Delay**
```javascript
// Delay between pixels (in milliseconds)
wplaceBot.setDelay(1000);  // 1 second
wplaceBot.setDelay(2000);  // 2 seconds (safer)
wplaceBot.setDelay(500);   // 0.5 seconds (faster)
```

### **4.3 Control the Bot**
```javascript
// Start drawing
wplaceBot.start();

// Stop drawing
wplaceBot.stop();

// Check status
console.log('Bot running:', wplaceBot.isRunning);
```

---

## 🎯 **5. Complete Step-by-Step Example**

### **Example 1: Draw a Heart**

```javascript
// 1. Make sure the bot is loaded
// (execute the fetch above first)

// 2. Load the heart image
wplaceBot.loadHeartImage();

// 3. Define where to draw (X, Y coordinates)
wplaceBot.setStartPosition(200, 150);

// 4. Set speed (2 seconds between pixels)
wplaceBot.setDelay(2000);

// 5. Start drawing
wplaceBot.start();

// To stop at any time:
// wplaceBot.stop();
```

### **Example 2: Use Custom Image**

```javascript
// 1. Use the converter or editor to generate this code
// 2. Paste the generated code (example):

const my_imageData = [
    { x: 0, y: 0, color: '#FF0000' },
    { x: 1, y: 0, color: '#00FF00' },
    { x: 0, y: 1, color: '#0000FF' },
    { x: 1, y: 1, color: '#FFFF00' }
];

function loadMy_image() {
    wplaceBot.loadImageFromData(my_imageData, 'my_image');
    wplaceBot.setStartPosition(100, 100);
    wplaceBot.setDelay(1000);
    console.log('✅ Image loaded! Use wplaceBot.start() to draw');
}

// 3. Execute the function
loadMy_image();

// 4. Start drawing
wplaceBot.start();
```

---

## ⚠️ **6. Important Tips**

### **6.1 Before Starting**
- ✅ **Check if there's free space** on the canvas
- ✅ **Test with small images** first
- ✅ **Use delay of at least 1000ms** to avoid overload
- ✅ **Make sure you're logged in** to wplace.live

### **6.2 During Drawing**
- ⏸️ **Can stop at any time** with `wplaceBot.stop()`
- 👀 **Monitor the console** to see progress
- 🔄 **If error occurs, reload the page** and start again

### **6.3 Troubleshooting**

#### **"Canvas not found"**
```javascript
// Reload the page and try again
location.reload();
```

#### **"WPlace Bot not found"**
```javascript
// Load the bot again
fetch('https://raw.githubusercontent.com/IkdanYT/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
```

#### **Bot not working**
```javascript
// Check if bot exists
console.log(typeof wplaceBot);

// Reinitialize if necessary
wplaceBot.init();
```

---

## 📱 **7. Useful Console Commands**

### **7.1 Status and Information**
```javascript
// Check if bot is running
console.log('Status:', wplaceBot.isRunning ? 'Running' : 'Stopped');

// Check current position
console.log('Position:', wplaceBot.startX, wplaceBot.startY);

// Check current delay
console.log('Delay:', wplaceBot.delay + 'ms');

// Check how many pixels remain
console.log('Progress:', wplaceBot.currentPixel + '/' + wplaceBot.pixels.length);
```

### **7.2 Quick Settings**
```javascript
// Quick setup for testing
wplaceBot.loadHeartImage();
wplaceBot.setStartPosition(100, 100);
wplaceBot.setDelay(1500);

// Setup for large image (slower)
wplaceBot.setDelay(3000);

// Setup for small image (faster)
wplaceBot.setDelay(800);
```

---

## 🎉 **8. Complete Usage Example**

### **Complete Sequence from Scratch:**

1. **Open wplace.live**
2. **Press F12** (open console)
3. **Paste and execute:**
   ```javascript
   fetch('https://raw.githubusercontent.com/IkdanYT/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
   ```
4. **Wait for confirmation message**
5. **Choose an option:**
   
   **Option A - Simple heart:**
   ```javascript
   wplaceBot.loadHeartImage();
   wplaceBot.setStartPosition(100, 100);
   wplaceBot.setDelay(1000);
   wplaceBot.start();
   ```
   
   **Option B - Use panel:**
   - Click "📁 Load Image"
   - Select file
   - Click "▶️ Start"
   
   **Option C - Converter/Editor:**
   - Click "🔧 Converter" or "🎨 Editor"
   - Create/convert image
   - Copy generated script
   - Paste in console

6. **Monitor progress in console**
7. **Stop when needed:** `wplaceBot.stop()`

---

**🎯 Ready! Now you can draw anything on wplace.live automatically!**
