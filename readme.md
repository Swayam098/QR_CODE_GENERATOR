# QR Code Generator – Web App (Flask + HTML/JS)

A modern, Python-based QR Code Generator with a sleek web interface.  
Users can enter any URL or text in the browser and instantly generate a downloadable QR code image.  
The backend is powered by Flask and Python’s `qrcode` library.

---

## 🚀 Features

- **Web Interface:** User-friendly, responsive page for QR code generation.
- **Python Backend:** Secure and efficient QR code generation with Flask.
- **Custom QR Generation:** Adjustable parameters for QR code size and error correction.
- **PNG Output:** Downloadable QR code image.
- **No Command Line Needed:** All interaction is through your browser.

---

## 📋 Table of Contents

- [Features](#-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Running the App](#-running-the-app)
- [How to Use](#-how-to-use)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Example](#-example)
- [Learn More](#-learn-more)

---

## 🛠 Requirements

- **Python 3.9 or newer** (Python 3.11+ recommended)
- **pip** (Python package installer)
- **Web browser** (Chrome, Firefox, Edge, etc.)

---

## 📦 Installation

1. **Clone the repository:**

git clone <your-repo-url>
cd "QR CODE GENERATOR"

2. **Install Python dependencies:**
   pip install flask flask-cors qrcode[pil]

If you get an error about Pillow or PIL, run:
pip install pillow

---

## 🗂 Project Structure

QR CODE GENERATOR/
│
├── app.py
├── static/
│ └── script.js # (if you have separate JS, otherwise ignore)
└── templates/
└── index.html # Your HTML interface

---

## ▶️ Running the App

1. **Start the Flask server:**
   python app.py

By default, the server runs at [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

2. **Open your browser and go to:**
   http://127.0.0.1:5000/

> **Do NOT use "Live Server" or open `index.html` directly. Always use the Flask server URL.**

---

## 💡 How to Use

1. Enter a URL or any text in the input field.
2. Click **"Generate QR Code"**.
3. The QR code will appear below.
4. Click **"Download QR Code"** to save the image.

---

## 🛠 Customization

- **QR Code Parameters:**  
  Edit `app.py` to change `version`, `error_correction`, `box_size`, or `border` in the `qrcode.QRCode` constructor.
- **Interface:**  
  Edit `templates/index.html` and `static/script.js` for UI/UX changes.

---

## 🐞 Troubleshooting

- **404 or "File not found":**  
  Make sure you are visiting `http://127.0.0.1:5000/` (Flask), **not** `localhost:3000` or opening the HTML file directly.
- **Module errors:**  
  Ensure you installed dependencies with:
  pip install flask flask-cors qrcode[pil] pillow

---

## 📝 Example

Input: https://www.example.com
Output: QR code displayed and downloadable as PNG.
