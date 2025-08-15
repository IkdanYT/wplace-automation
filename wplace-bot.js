/**
 * Bot to automate drawings on wplace.live
 * Instructions:
 * 1. Open wplace.live website in browser
 * 2. Open Developer Console (F12 > Console)
 * 3. Paste this script and press Enter
 * 4. Configure your image and initial position
 * 5. Run the bot
 */

class WPlaceBot {
  constructor() {
    this.isRunning = false
    this.delay = 1000 // Delay between clicks in ms
    this.currentPixel = 0
    this.pixels = []
    this.startX = 0
    this.startY = 0
    this.canvas = null
    this.colorPalette = []
    this.selectedColor = "#000000"
  }

  // Initialize the bot
  init() {
    console.log("🎨 WPlace Bot initialized!")
    this.findCanvas()
    this.findColorPalette()
    this.createControlPanel()
  }

  // Find wplace canvas
  findCanvas() {
    // Search for different possible canvas selectors
    const possibleSelectors = [
      "canvas",
      "#canvas",
      ".canvas",
      '[data-testid="canvas"]',
      "canvas[width]",
      "canvas[height]",
    ]

    for (const selector of possibleSelectors) {
      const element = document.querySelector(selector)
      if (element) {
        this.canvas = element
        console.log("✅ Canvas found:", selector)
        return
      }
    }

    console.error("❌ Canvas not found. Make sure you are on wplace.live")
  }

  // Find color palette
  findColorPalette() {
    // Search for elements that might be colors
    const colorElements = document.querySelectorAll('[style*="background-color"], .color, [data-color], .palette-color')

    colorElements.forEach((element) => {
      const bgColor = window.getComputedStyle(element).backgroundColor
      if (bgColor && bgColor !== "rgba(0, 0, 0, 0)") {
        this.colorPalette.push({
          element: element,
          color: bgColor,
        })
      }
    })

    console.log(`✅ Found ${this.colorPalette.length} colors in palette`)
  }

  // Convert RGB color to HEX
  rgbToHex(rgb) {
    const result = rgb.match(/\d+/g)
    if (!result) return "#000000"

    const [r, g, b] = result.map((num) => Number.parseInt(num))
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  // Find closest color in palette
  findClosestColor(targetColor) {
    if (this.colorPalette.length === 0) return null

    let closestColor = this.colorPalette[0]
    let minDistance = Number.POSITIVE_INFINITY

    // Convert target color to RGB
    const target = this.hexToRgb(targetColor)
    if (!target) return closestColor

    this.colorPalette.forEach((paletteColor) => {
      const rgb = this.rgbStringToObject(paletteColor.color)
      if (rgb) {
        const distance = Math.sqrt(
          Math.pow(target.r - rgb.r, 2) + Math.pow(target.g - rgb.g, 2) + Math.pow(target.b - rgb.b, 2),
        )

        if (distance < minDistance) {
          minDistance = distance
          closestColor = paletteColor
        }
      }
    })

    return closestColor
  }

  // Convert HEX to RGB
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  // Convert RGB string to object
  rgbStringToObject(rgb) {
    const result = rgb.match(/\d+/g)
    if (!result || result.length < 3) return null

    return {
      r: Number.parseInt(result[0]),
      g: Number.parseInt(result[1]),
      b: Number.parseInt(result[2]),
    }
  }

  // Select a color in the palette
  selectColor(color) {
    const closestColor = this.findClosestColor(color)
    if (closestColor && closestColor.element) {
      closestColor.element.click()
      this.selectedColor = color
      console.log(`🎨 Color selected: ${color}`)
      return true
    }
    return false
  }

  // Click on a specific canvas position
  clickCanvas(x, y) {
    if (!this.canvas) return false

    const rect = this.canvas.getBoundingClientRect()
    const canvasX = x + rect.left
    const canvasY = y + rect.top

    // Create mouse events
    const events = ["mousedown", "mouseup", "click"]

    events.forEach((eventType) => {
      const event = new MouseEvent(eventType, {
        bubbles: true,
        cancelable: true,
        clientX: canvasX,
        clientY: canvasY,
        button: 0,
      })
      this.canvas.dispatchEvent(event)
    })

    console.log(`🖱️ Clicked at (${x}, ${y})`)
    return true
  }

  // Load a simple image (color matrix)
  loadSimpleImage(imageData, width, height) {
    this.pixels = []

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = y * width + x
        if (index < imageData.length) {
          this.pixels.push({
            x: x,
            y: y,
            color: imageData[index],
          })
        }
      }
    }

    console.log(`📷 Image loaded: ${width}x${height} pixels (${this.pixels.length} pixels)`)
  }

  // Example simple image - a small heart
  loadHeartImage() {
    const heart = [
      "⬜",
      "🟥",
      "🟥",
      "⬜",
      "🟥",
      "🟥",
      "⬜",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "⬜",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "🟥",
      "⬜",
      "⬜",
      "⬜",
      "🟥",
      "🟥",
      "🟥",
      "⬜",
      "⬜",
      "⬜",
      "⬜",
      "⬜",
      "🟥",
      "⬜",
      "⬜",
      "⬜",
    ]

    const colorMap = {
      "🟥": "#FF0000",
      "⬜": "#FFFFFF",
    }

    const imageData = heart.map((emoji) => colorMap[emoji] || "#FFFFFF")
    this.loadSimpleImage(imageData, 7, 7)
  }

  // Example image - smiley face
  loadSmileyImage() {
    const smiley = [
      "⬜",
      "⬜",
      "🟨",
      "🟨",
      "🟨",
      "⬜",
      "⬜",
      "⬜",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "⬜",
      "🟨",
      "🟨",
      "⬛",
      "🟨",
      "⬛",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "🟨",
      "⬛",
      "🟨",
      "🟨",
      "🟨",
      "⬛",
      "🟨",
      "⬜",
      "🟨",
      "⬛",
      "⬛",
      "⬛",
      "🟨",
      "⬜",
      "⬜",
      "⬜",
      "🟨",
      "🟨",
      "🟨",
      "⬜",
      "⬜",
    ]

    const colorMap = {
      "🟨": "#FFFF00",
      "⬛": "#000000",
      "⬜": "#FFFFFF",
    }

    const imageData = smiley.map((emoji) => colorMap[emoji] || "#FFFFFF")
    this.loadSimpleImage(imageData, 7, 7)
  }

  // Start the bot
  async start() {
    if (this.isRunning) {
      console.log("⚠️ Bot is already running!")
      return
    }

    if (this.pixels.length === 0) {
      console.log("⚠️ Load an image first!")
      return
    }

    this.isRunning = true
    this.currentPixel = 0
    console.log("🚀 Bot started!")

    while (this.isRunning && this.currentPixel < this.pixels.length) {
      const pixel = this.pixels[this.currentPixel]
      const x = this.startX + pixel.x
      const y = this.startY + pixel.y

      // Select color
      if (this.selectColor(pixel.color)) {
        // Wait a bit for color to be selected
        await this.sleep(200)

        // Click on canvas
        this.clickCanvas(x, y)

        console.log(`✅ Pixel ${this.currentPixel + 1}/${this.pixels.length} placed at (${x}, ${y})`)
      }

      this.currentPixel++

      // Wait before next pixel
      await this.sleep(this.delay)
    }

    this.isRunning = false
    console.log("✅ Bot finished!")
  }

  // Stop the bot
  stop() {
    this.isRunning = false
    console.log("⏹️ Bot stopped!")
  }

  // Delay function
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // Set initial position
  setStartPosition(x, y) {
    this.startX = x
    this.startY = y
    console.log(`📍 Initial position set: (${x}, ${y})`)
  }

  // Set delay between clicks
  setDelay(ms) {
    this.delay = ms
    console.log(`⏱️ Delay set: ${ms}ms`)
  }

  // Load image from pixel data
  loadImageFromData(pixelData, name = "Custom Image") {
    if (!Array.isArray(pixelData)) {
      console.error("❌ Image data must be an array of objects {x, y, color}")
      return false
    }

    // Validate data format
    const isValidData = pixelData.every(
      (pixel) =>
        typeof pixel === "object" &&
        typeof pixel.x === "number" &&
        typeof pixel.y === "number" &&
        typeof pixel.color === "string",
    )

    if (!isValidData) {
      console.error("❌ Invalid format. Each pixel must have {x, y, color}")
      return false
    }

    this.pixels = pixelData.slice() // Copy data
    console.log(`✅ ${name} loaded: ${pixelData.length} pixels`)

    // Calculate image dimensions
    const maxX = Math.max(...pixelData.map((p) => p.x))
    const maxY = Math.max(...pixelData.map((p) => p.y))
    console.log(`📐 Dimensions: ${maxX + 1}x${maxY + 1} pixels`)

    // Count unique colors
    const uniqueColors = [...new Set(pixelData.map((p) => p.color))]
    console.log(`🎨 Unique colors: ${uniqueColors.length}`)

    return true
  }

  // Load image from data URL
  async loadImageFromUrl(imageUrl, maxWidth = 50, maxHeight = 50) {
    try {
      console.log("🔄 Loading image from URL...")

      const img = new Image()
      img.crossOrigin = "anonymous"

      return new Promise((resolve, reject) => {
        img.onload = () => {
          try {
            const pixelData = this.processImageToPixels(img, maxWidth, maxHeight)
            this.loadImageFromData(pixelData, "Image from URL")
            resolve(true)
          } catch (error) {
            reject(error)
          }
        }

        img.onerror = () => {
          reject(new Error("Error loading image from URL"))
        }

        img.src = imageUrl
      })
    } catch (error) {
      console.error("❌ Error loading image:", error)
      return false
    }
  }

  // Process HTML image to pixel data
  processImageToPixels(img, maxWidth, maxHeight) {
    // Calculate dimensions maintaining aspect ratio
    const scale = Math.min(maxWidth / img.width, maxHeight / img.height)
    const width = Math.floor(img.width * scale)
    const height = Math.floor(img.height * scale)

    // Create temporary canvas
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = width
    canvas.height = height

    // Draw resized image
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(img, 0, 0, width, height)

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data

    const pixels = []
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4
        const r = data[index]
        const g = data[index + 1]
        const b = data[index + 2]
        const a = data[index + 3]

        // Ignore transparent pixels
        if (a < 128) continue

        const color =
          "#" +
          [r, g, b]
            .map((x) => {
              const hex = x.toString(16)
              return hex.length === 1 ? "0" + hex : hex
            })
            .join("")

        pixels.push({ x, y, color })
      }
    }

    return pixels
  }

  // Create control panel
  createControlPanel() {
    // Remove previous panel if exists
    const existingPanel = document.getElementById("wplace-bot-panel")
    if (existingPanel) {
      existingPanel.remove()
    }

    const panel = document.createElement("div")
    panel.id = "wplace-bot-panel"
    panel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: #2c2c2c;
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            font-size: 12px;
            z-index: 10000;
            width: 250px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        `

    panel.innerHTML = `
            <h3 style="margin: 0 0 10px 0; color: #4CAF50;">🎨 WPlace Bot</h3>
            <div style="margin-bottom: 10px;">
                <label>Position X: <input type="number" id="startX" value="100" style="width: 60px;"></label>
                <label>Position Y: <input type="number" id="startY" value="100" style="width: 60px;"></label>
            </div>
            <div style="margin-bottom: 10px;">
                <label>Delay (ms): <input type="number" id="delay" value="1000" style="width: 80px;"></label>
            </div>
            <div style="margin-bottom: 10px;">
                <button id="loadHeart" style="margin-right: 5px; margin-bottom: 5px;">❤️ Heart</button>
                <button id="loadSmiley" style="margin-bottom: 5px;">😊 Smiley</button>
            </div>
            <div style="margin-bottom: 10px;">
                <input type="file" id="imageInput" accept="image/*" style="display: none;">
                <button id="loadCustom" style="background: #FF9800; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-right: 5px; margin-bottom: 5px; font-size: 11px;">📁 Load Image</button>
                <button id="openConverter" style="background: #9C27B0; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-right: 5px; margin-bottom: 5px; font-size: 11px;">🔧 Converter</button>
                <button id="openEditor" style="background: #E91E63; color: white; border: none; padding: 6px 10px; border-radius: 4px; margin-bottom: 5px; font-size: 11px;">🎨 Editor</button>
            </div>
            <div style="margin-bottom: 10px;">
                <button id="startBot" style="background: #4CAF50; color: white; border: none; padding: 8px 12px; border-radius: 4px; margin-right: 5px;">▶️ Start</button>
                <button id="stopBot" style="background: #f44336; color: white; border: none; padding: 8px 12px; border-radius: 4px;">⏹️ Stop</button>
            </div>
            <div id="status" style="font-size: 11px; color: #ccc;">
                Status: Ready
            </div>
        `

    document.body.appendChild(panel)

    // Event listeners
    document.getElementById("startX").addEventListener("input", (e) => {
      this.setStartPosition(Number.parseInt(e.target.value) || 0, this.startY)
    })

    document.getElementById("startY").addEventListener("input", (e) => {
      this.setStartPosition(this.startX, Number.parseInt(e.target.value) || 0)
    })

    document.getElementById("delay").addEventListener("input", (e) => {
      this.setDelay(Number.parseInt(e.target.value) || 1000)
    })

    document.getElementById("loadHeart").addEventListener("click", () => {
      this.loadHeartImage()
      document.getElementById("status").textContent = "Status: Heart loaded"
    })

    document.getElementById("loadSmiley").addEventListener("click", () => {
      this.loadSmileyImage()
      document.getElementById("status").textContent = "Status: Smiley loaded"
    })

    document.getElementById("startBot").addEventListener("click", () => {
      this.start()
      document.getElementById("status").textContent = "Status: Running..."
    })

    document.getElementById("stopBot").addEventListener("click", () => {
      this.stop()
      document.getElementById("status").textContent = "Status: Stopped"
    })

    document.getElementById("loadCustom").addEventListener("click", () => {
      document.getElementById("imageInput").click()
    })

    document.getElementById("imageInput").addEventListener("change", async (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0]
        try {
          document.getElementById("status").textContent = "Status: Loading image..."

          const reader = new FileReader()
          reader.onload = async (event) => {
            try {
              await this.loadImageFromUrl(event.target.result, 50, 50)
              document.getElementById("status").textContent = "Status: Image loaded!"
            } catch (error) {
              console.error("Error processing image:", error)
              document.getElementById("status").textContent = "Status: Error loading image"
            }
          }
          reader.readAsDataURL(file)
        } catch (error) {
          console.error("Error reading file:", error)
          document.getElementById("status").textContent = "Status: Error reading file"
        }
      }
    })

    document.getElementById("openConverter").addEventListener("click", () => {
      const converterPath =
        window.location.origin + window.location.pathname.replace(/[^/]*$/, "") + "image-converter.html"
      window.open(converterPath, "_blank")
    })

    document.getElementById("openEditor").addEventListener("click", () => {
      const editorPath = window.location.origin + window.location.pathname.replace(/[^/]*$/, "") + "pixel-editor.html"
      window.open(editorPath, "_blank")
    })
  }
}

// Initialize the bot
const wplaceBot = new WPlaceBot()
wplaceBot.init()

// Available console commands:
console.log(`
🎨 WPlace Bot Loaded! 

Available commands:
- wplaceBot.setStartPosition(x, y) - Set initial position
- wplaceBot.setDelay(ms) - Set delay between clicks  
- wplaceBot.loadHeartImage() - Load heart image
- wplaceBot.loadSmileyImage() - Load smiley image
- wplaceBot.loadImageFromData(pixelData, name) - Load image from data
- wplaceBot.loadImageFromUrl(url, maxWidth, maxHeight) - Load image from URL
- wplaceBot.start() - Start the bot
- wplaceBot.stop() - Stop the bot

🔧 Image Converter:
Use the control panel or open image-converter.html to convert your own images!

Or use the control panel that appeared in the top right corner!
`)
