import qrcode
from datetime import datetime


def generate_qrcode(text):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")

    now = datetime.now()  # current date and time
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    filename = ''.join(filter(str.isdigit, date_time)) + '.png'
    img.save(filename)


url = input("Enter your url: ")
generate_qrcode(url)
