import random

alphabet = list(map(chr, range(33, 123)))


def generate_password():
    password_len = int(input("Enter password length:"))

    random.shuffle(alphabet)
    password = []

    for x in range(password_len):
        password.append(random.choice(alphabet))

    random.shuffle(password)
    password = "".join(password)
    print(password)


generate_password()
