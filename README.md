# WPlace Bot - Drawing Automation

Bot to automate drawing creation on wplace.live website.

## 🚀 How to Use (Step-by-Step)

### **Step 1: Preparation**
1. **Open** [wplace.live](https://wplace.live) in your browser
2. **Press** `F12` to open the Console (or Ctrl+Shift+I)
3. **Click** on the "Console" tab

### **Step 2: Load the Bot** ⚠️ **REQUIRED**
**Paste this code in the console and press Enter:**
\`\`\`javascript
fetch('https://raw.githubusercontent.com/IkdanYT/wplace-automation/main/wplace-bot.js').then(r=>r.text()).then(eval)
\`\`\`

**Wait to see:**
- ✅ Message "🎨 WPlace Bot Loaded!"
- ✅ Control panel in the top right corner

### **Step 3: Choose Your Method**

#### **🖼️ Option A: Direct Upload (Easiest)**
1. Click **"📁 Load Image"** in the panel
2. Select your image
3. Configure position (X, Y)
4. Click **"▶️ Start"**

#### **🔧 Option B: Advanced Converter**
1. Click **"🔧 Converter"** in the panel
2. Drag your image
3. Configure options
4. Generate and copy the script
5. Paste in console

#### **🎨 Option C: Pixel Art Editor**
1. Click **"🎨 Editor"** in the panel
2. Draw directly
3. Copy the generated script
4. Paste in console

#### **❤️ Option D: Quick Test**
\`\`\`javascript
wplaceBot.loadHeartImage();
wplaceBot.setStartPosition(100, 100);
wplaceBot.start();
\`\`\`

### **Basic Controls**
\`\`\`javascript
wplaceBot.start();    // Start drawing
wplaceBot.stop();     // Stop drawing
wplaceBot.setStartPosition(x, y);  // Set position
wplaceBot.setDelay(1000);          // Set speed
\`\`\`

## 🎮 How to Use the Bot

### Control Panel

The bot creates a control panel in the top right corner with:

- **Position X/Y**: Defines where the drawing will start
- **Delay**: Time between each pixel (in milliseconds)
- **Image buttons**: Loads pre-defined images (Heart, Smiley)
- **Load Image**: Allows loading your own images (PNG, JPG, etc.)
- **Converter**: Opens the advanced image conversion tool
- **Start/Stop**: Controls bot execution

### 🖼️ Importing Your Own Images

#### Method 1: Direct Upload in Panel
1. Click "📁 Load Image" in the control panel
2. Select your image (PNG, JPG, GIF)
3. The image will be automatically resized and loaded

#### Method 2: Advanced Converter
1. Click "🔧 Converter" in the panel or open `image-converter.html`
2. Drag your image or click to select
3. Configure options:
   - **Maximum size**: Width and height in pixels
   - **Color mode**: Limited palette, full colors, or grayscale
   - **Starting position**: Where to start drawing
   - **Delay**: Time between each pixel
4. Click "🔄 Convert Image" to see preview
5. Click "📝 Generate Script" to get the code
6. Copy and paste the script in wplace.live console

#### 🆕 Method 3: Pixel Art Editor
1. Click "🎨 Editor" in the panel or open `pixel-editor.html`
2. **Draw directly** on screen using:
   - **🖌️ Brush**: Draw individual pixels
   - **🧽 Eraser**: Erase pixels
   - **🪣 Bucket**: Fill areas
   - **🎯 Eyedropper**: Select existing colors
   - **📏 Line**: Draw straight lines
   - **⬜ Rectangle**: Create rectangular shapes
3. **Configure canvas**: Size, colors, zoom
4. **Real-time visualization**: Grid, statistics, preview
5. **Generate script** automatically as you draw
6. **Export** in multiple formats or save as PNG

### Console Commands

\`\`\`javascript
// Set starting position (x, y)
wplaceBot.setStartPosition(100, 100);

// Set delay between clicks (in ms)
wplaceBot.setDelay(2000);

// Load pre-defined images
wplaceBot.loadHeartImage();    // Heart 7x7
wplaceBot.loadSmileyImage();   // Smiley 7x7

// Load image from custom data
const myPixels = [
    { x: 0, y: 0, color: '#FF0000' },
    { x: 1, y: 0, color: '#00FF00' },
    // ... more pixels
];
wplaceBot.loadImageFromData(myPixels, 'My Image');

// Load image from URL (data URL or external URL)
wplaceBot.loadImageFromUrl('data:image/png;base64,...', 50, 50);

// Control the bot
wplaceBot.start();  // Start
wplaceBot.stop();   // Stop
\`\`\`

## 🎨 Available Images

### Pre-defined Images

- **❤️ Heart**: 7x7 pixels in red
- **😊 Smiley**: 7x7 pixels yellow with smiley face

### 🆕 Your Own Images

Now you can import any image! The bot supports:

- **Formats**: PNG, JPG, JPEG, GIF
- **Automatic resizing**: Your images are resized to optimal size
- **Color optimization**: Converts to available colors on wplace.live
- **Three color modes**:
  - **Limited Palette**: Uses only common wplace colors
  - **Full Colors**: Maintains original colors (may not have exact match)
  - **Grayscale**: Converts to black and white

### How to Convert Your Images

1. **Open Converter**: Use `image-converter.html` or click "🔧 Converter" button in panel
2. **Import Your Image**: Drag or select the file
3. **Configure Options**:
   - Maximum size (recommended: 50x50 for small images)
   - Color mode (recommended: Limited Palette)
   - Starting position on canvas
   - Delay between pixels
4. **Preview Result**: See how your pixelated image will look
5. **Generate Script**: Get ready-to-use code
6. **Use on WPlace**: Paste the script in wplace.live console

### ⚠️ Important Tips

- **Size**: Very large images take a long time to draw
- **Delay**: Use at least 1000ms between pixels to avoid overload
- **Colors**: "Limited Palette" mode ensures better compatibility
- **Position**: Check if there's enough space on canvas before starting

### Heart (7x7)
\`\`\`
⬜🟥🟥⬜🟥🟥⬜
🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥
⬜🟥🟥🟥🟥🟥⬜
⬜⬜🟥🟥🟥⬜⬜
⬜⬜⬜🟥⬜⬜⬜
\`\`\`

### Smiley (7x7)
\`\`\`
⬜⬜🟨🟨🟨⬜⬜
⬜🟨🟨🟨🟨🟨⬜
🟨🟨⬛🟨⬛🟨🟨
🟨🟨🟨🟨🟨🟨🟨
🟨⬛🟨🟨🟨⬛🟨
⬜🟨⬛⬛⬛🟨⬜
⬜⬜🟨🟨🟨⬜⬜
\`\`\`

## 🔧 Creating Your Own Images

### Simple Method

\`\`\`javascript
// Create a color matrix (7x7 example)
const myImage = [
    '#FF0000', '#FF0000', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FF0000', '#FF0000',
    '#FF0000', '#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000',
    // ... continue for 49 pixels (7x7)
];

// Load the image
wplaceBot.loadSimpleImage(myImage, 7, 7);
\`\`\`

### Method with Emojis

\`\`\`javascript
const design = [
    '🟦', '🟦', '🟦',
    '🟦', '🟨', '🟦',
    '🟦', '🟦', '🟦'
];

const colorMap = {
    '🟦': '#0000FF',
    '🟨': '#FFFF00'
};

const imageData = design.map(emoji => colorMap[emoji]);
wplaceBot.loadSimpleImage(imageData, 3, 3);
\`\`\`

## ⚠️ Important Warnings

1. **Use responsibly**: Respect the wplace.live community
2. **Adequate delays**: Use delays of at least 1000ms to not overload the server
3. **Image size**: Start with small images (maximum 10x10)
4. **Coordinates**: Check that your coordinates don't exceed canvas limits

## 🛠️ Bot Features

- ✅ Integrated graphical interface
- ✅ Automatic canvas detection
- ✅ Automatic color palette detection
- ✅ Automatic closest color selection
- ✅ Speed control (delay)
- ✅ Pre-defined images
- ✅ Emergency stop system
- ✅ Detailed action logging

## 🐛 Troubleshooting

### "Canvas not found"
- Make sure you're on wplace.live website
- Wait for the site to load completely
- Reload the page and try again

### "Colors not selected"
- The site may have changed the color palette structure
- Try selecting colors manually first

### Bot doesn't work
- Check if there are no script blockers
- Try reloading the script
- Check console for errors

## 📝 License

This script is provided "as is" for educational purposes. Use at your own risk.

## 📁 Project Files

- `wplace-bot.js` - Main bot script with all functionalities
- `wplace-bot-minified.js` - Minified version of the bot
- `image-converter.html` - **🔧 Web image converter** (Complete interface)
- `pixel-editor.html` - **🆕 Pixel Art Editor** (Draw directly on screen!)
- `demo-converter.html` - Demo page and instructions
- `custom-images.md` - Examples and guide for custom images
- `README.md` - This file with all instructions

## 🆕 New Features - Pixel Art Editor

### 🎨 Complete Pixel Art Editor
The `pixel-editor.html` file is a complete editor where you can **draw directly**:

#### **🛠️ Available Tools**:
- **🖌️ Brush**: Draw pixel by pixel
- **🧽 Eraser**: Erase specific pixels
- **🪣 Bucket**: Fill areas with one color
- **🎯 Eyedropper**: Select existing colors in the drawing
- **📏 Line**: Draw perfect straight lines
- **⬜ Rectangle**: Create rectangular shapes

#### **🎨 Color System**:
- **30-color palette** optimized for wplace.live
- **Custom color picker** for specific colors
- **Real-time preview** of all colors

#### **📐 Canvas Controls**:
- **Configurable size**: From 5x5 to 100x100 pixels
- **Adjustable zoom**: 1x to 5x for precision
- **Optional grid**: For better visualization
- **Complete history**: Unlimited undo/redo

#### **📊 Advanced Features**:
- **Image import**: Drag existing images
- **PNG export**: Save your work in high resolution
- **Real-time statistics**: Pixels, colors, estimated time
- **Multiple script formats**: Complete script, function, or pure data

#### **⚡ Automatic Generation**:
- **Real-time script generation** as you draw
- **Three output formats**:
  - Complete ready-to-use script
  - Custom function
  - Pure image data
- **One-click copy** to clipboard

---

**🎉 Now you have 3 different ways to create art for wplace.live:**

### 1. 📁 **Direct Upload** - *Quick and Simple*
- Click "📁 Load Image" in the panel
- Select any image
- Ready to use!

### 2. 🔧 **Advanced Converter** - *Maximum Control*
- Import any image format
- Configure size, colors, and optimizations
- Complete preview before generating
- Multiple output formats

### 3. 🎨 **Pixel Art Editor** - *Original Creation*
- Draw directly on screen
- Professional tools (brush, bucket, line, etc.)
- Real-time script generation
- Complete color and zoom system

**✨ All methods generate ready-to-paste scripts for wplace.live console!**
