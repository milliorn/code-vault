import random


def play():
    user = input("'r' for rock, 'p' for paper, 's' for scissors")
    computer = random.choice(['r', 'p', 's'])

    if user == computer:
        return 'tie'

    if is_win(user, computer):
        return 'You won!'

    return 'You lost!'


def is_win(user, computer):
    return (user == 'r' and computer == 's') or (user == 's' and computer == 'p') or (user == 'p' and computer == 'r')


print(play())
