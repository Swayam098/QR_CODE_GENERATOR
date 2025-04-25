QR Code Generator – Web App (Flask + HTML/JS)
This project is a Python-based QR Code Generator with a modern web interface. Users can input a website URL or any text in the browser and generate a QR code, which is displayed instantly and can be downloaded as a PNG image. The backend is powered by Flask and Python’s qrcode library.

Features
Web Interface: User-friendly, responsive web page for QR code generation.

Python Backend: Uses Flask to generate QR codes securely and efficiently.

Custom QR Generation: Adjustable QR code parameters for reliability.

PNG Output: Downloadable QR code image.

No Command Line Needed: All interaction is through the browser.

Requirements
Python 3.9 or newer
(Python 3.11+ recommended; Python <=3.8 is not supported by latest qrcode)

pip (Python package installer)

Node.js/NPM: Not required unless you want to use a JS-only solution.

Web browser (Chrome, Firefox, Edge, etc.)

Installation
Clone the repository:
git clone <your-repo-url>
cd "QR CODE GENERATOR"

Install Python dependencies:
pip install flask flask-cors qrcode[pil]

If you get an error about Pillow or PIL, install it with:
pip install pillow

Project Structure

QR CODE GENERATOR/
│
├── app.py
├── static/
│   └── script.js        # (if you have separate JS, otherwise ignore)
└── templates/
    └── index.html       # Your HTML interface

Running the App
Start the Flask server:

bash
python app.py
By default, the server runs at http://127.0.0.1:5000/.

Open your browser and go to:

http://127.0.0.1:5000/
Do NOT use "Live Server" or open index.html directly; always use the Flask server URL.

How to Use
Enter a URL or any text in the input field.

Click "Generate QR Code".

The QR code will appear below.

Click "Download QR Code" to save the image.

Customization
QR Code Parameters:
Edit app.py to change version, error_correction, box_size, or border in the qrcode.QRCode constructor.

Interface:
Edit templates/index.html and static/script.js for UI/UX changes.

Troubleshooting
404 or "File not found":
Make sure you are visiting http://127.0.0.1:5000/ (Flask), not localhost:3000 or opening the HTML file directly.

Module errors:
Ensure you installed dependencies with pip install flask flask-cors qrcode[pil] pillow.

Example
Input: https://www.example.com
Output: QR code displayed and downloadable as PNG.






