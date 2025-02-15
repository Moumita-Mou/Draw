# Draw

**Draw** is a simple, browser-based drawing application built using the [p5.js](https://p5js.org/) framework. It allows users to create freehand drawings directly in the browser, using intuitive controls and customizable options for creativity.

## Features

- **Freehand Drawing**: Draw lines and shapes on a canvas using the mouse.
- **Customizable Brush**: Adjust the size and color of your brush.
- **Clear Canvas**: Easily reset the canvas to start a new drawing.
- **Download Art**: Save your masterpiece as an image file.


## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/draw.git
   ```

2. Navigate to the project directory:

   ```bash
   cd draw
   ```

3. Open `index.html` in your browser to start drawing.

## Troubleshooting

### Cross-Origin Request Issue

If you encounter the error `"Cross origin requests are only supported for HTTP."` while running the app locally:

- This error occurs because some browsers block `file://` requests due to cross-origin policies.
- **Solution**: You need to serve the project through a local server. You can use any lightweight server like `http-server` in Node.js, or Python's built-in HTTP server.

#### Using Node.js

1. Install the `http-server` package:

   ```bash
   npm install -g http-server
   ```

2. Run the server in the project directory:

   ```bash
   http-server
   ```

3. Open `http://localhost:8080` in your browser.

#### Using Python

For Python 3:

   ```bash
   python3 -m http.server
   ```

For Python 2:

   ```bash
   python -m SimpleHTTPServer
   ```

Then, open `http://localhost:8000` in your browser.   
   

## Dependencies

This project uses the following dependencies:

- [p5.js](https://p5js.org/): A JavaScript library that makes coding interactive graphics and animations easier.

## Usage

- Click and drag the mouse on the canvas to draw.
- Use the color picker to choose different brush colors.
- Use the slider to adjust the brush size.
- Click the "Clear" button to reset the canvas.
- Click the "Save" button to download your drawing as an image.


