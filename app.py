import qrcode

def generate_qr_code(data, filename='qrcode.png'):
    # Create instance of QRCode
    qr = qrcode.QRCode(
        version=1,  # controls the size of the QR Code
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # error correction level
        box_size=10,  # size of each box
        border=4,  # thickness of the border
    )
    
    # Add data to the QR code
    qr.add_data(data)
    qr.make(fit=True)  # ensures the entire data fits in the QR code

    # Create an image of the QR code
    img = qr.make_image(fill_color="black", back_color="white")

    # Save the image to a file
    img.save(filename)
    print(f"QR code saved as {filename}")

# Ask the user for input
website = input("Enter a website URL: ")

# Generate QR code for the input website
generate_qr_code(website, 'website_qrcode.png')
